<?php
namespace ChatApp;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use \SplObjectStorage;

class Chat implements MessageComponentInterface
{
    protected $clients;

    public function __construct()
    {
        $this->clients = new SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $connection)
    {
        $this->clients->attach($connection);

        echo "someone connected\n";
    }

    public function onMessage(ConnectionInterface $from, $message)
    {
        foreach ($this->clients as $client) {
            echo "message sent";
            $client->send($message);
        }
    }

    public function onClose(ConnectionInterface $connection)
    {
        $this->clients->detach($connection);

        echo "someone disconnected\n";
    }

    public function onError(ConnectionInterface $connection, \Exception $e)
    {
        echo "An error has occurred: " . $e->getMessage() . "\n";

        $connection->close();
    }
}

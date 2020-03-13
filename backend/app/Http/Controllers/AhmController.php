<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AhmUtil as au;

class AhmController extends Controller
{
    function sayHello(Request $req){
        return au::resp(1, 'Hello from laravel with hope!');
    }

    function handleUpload(Request $req){
        return au::uploadHttpProcess($req);
    }

    
}

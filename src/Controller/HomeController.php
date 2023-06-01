<?php

namespace App\Controller;

use App\Form\SearchType;
use App\Repository\ImageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(Request $request,  ImageRepository $imageRepository): Response
    {
        $form =  $this->createForm(SearchType::class);
        $form->handleRequest($request);
        return $this->render('home/index.html.twig',[
            'form' => $form->createView()
        ]);
    }
}

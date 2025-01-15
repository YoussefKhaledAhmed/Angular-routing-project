import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import path from 'path';
import { Component } from '@angular/core';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'' , redirectTo:()=>{
        return 'home';
    } , pathMatch:"full"},
    {path:'home' , component:HomeComponent , title:'home'},
    {path:'about' , component:AboutComponent , title:'about'},
    {path:'meals' , component:MealsComponent , title: 'meals' , children:[
        {path:'seafood' , component:SeafoodComponent , title:'seafood'},
        {path:'pasta' , component:PastaComponent , title:'pasta'},
        {path:'breakfast' , component:BreakfastComponent , title:'breakfast'}]
    },
    {path:'team' , component:TeamComponent , title:'team'},
    {path:'contacts' , component:ContactsComponent , title:'contacts'},
    {path:'**' , component:NotFoundComponent , title:'not found'}
];
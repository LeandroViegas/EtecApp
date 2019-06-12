import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'primeiroNormal', loadChildren: './Medio/Normal/primeiro/primeiro.module#PrimeiroPageModule' },
  { path: 'segundoNormal', loadChildren: './Medio/Normal/segundo/segundo.module#SegundoPageModule' },
  { path: 'terceiroNormal', loadChildren: './Medio/Normal/terceiro/terceiro.module#TerceiroPageModule' },
  { path: 'primeiroIntegrado', loadChildren: './Medio/integrado/primeiro/primeiro.module#PrimeiroPageModule' },
  { path: 'segundoIntegrado', loadChildren: './Medio/integrado/segundo/segundo.module#SegundoPageModule' },
  { path: 'terceiroIntegrado', loadChildren: './Medio/integrado/terceiro/terceiro.module#TerceiroPageModule' },
  { path: 'medio', loadChildren: './Medio/medio/medio.module#MedioPageModule' },
  { path: 'ativo', loadChildren: './Tecnico/ativo/ativo.module#AtivoPageModule' },
  { path: 'aberto', loadChildren: './Tecnico/aberto/aberto.module#AbertoPageModule' },
  { path: 'terceiro-marketing', loadChildren: './terceiro-marketing/terceiro-marketing.module#TerceiroMarketingPageModule' },
  { path: 'terceiro-secretariado', loadChildren: './terceiro-secretariado/terceiro-secretariado.module#TerceiroSecretariadoPageModule' },
  { path: 'primeiro-ds', loadChildren: './primeiro-ds/primeiro-ds.module#PrimeiroDSPageModule' },
  { path: 'segundo-ds', loadChildren: './segundo-ds/segundo-ds.module#SegundoDSPageModule' },
  { path: 'secretariado-aberto', loadChildren: './secretariado-aberto/secretariado-aberto.module#SecretariadoAbertoPageModule' },
  { path: 'marketing-aberto', loadChildren: './marketing-aberto/marketing-aberto.module#MarketingAbertoPageModule' },
  { path: 'dsaberto', loadChildren: './dsaberto/dsaberto.module#DSAbertoPageModule' },
  { path: 'noticia', loadChildren: './noticia/noticia.module#NoticiaPageModule' },  { path: 'curso', loadChildren: './curso/curso.module#CursoPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

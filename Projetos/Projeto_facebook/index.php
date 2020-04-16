<!DOCTYPE html>
<html>

<head>
    <title>Facebook Login</title>
    <link rel="stylesheet" href="css/style.css" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximun-scale=1.0">
</head>

<body>
    <header>
        <div class="center">
            <div class="logo">
                <h2>Facebook</h2>
            </div>
            <form method="post" class="form-login">
                <div class="form-element">
                    <p>E-mail ou telefone:</p>
                    <input type="email">
                </div>
                <div class="form-element">
                    <p>Senha:</p>
                    <input type="password">
                </div>
                <div class="form-element">
                    <input type="submit" name="acao" value="Enviar">
                </div>
            </form>
            <div class="clear"></div>
        </div>
    </header>
    <section class="main">
        <div class="center">
            <div class="img-pessoas">
                <p>O Facebook ajuda você a se conectar e compartilhar 
                    com as pessoas que fazem parte da sua vida.</p>
                <img src="img/imagen.png" alt="">
            </div>
            <div class="abrir-conta">
                <h2>Abra sua conta</h2>
                <h3>É gratuito e sempre será!</h3>
                <form class="form-criar-conta">
                    <div class="w50">
                        <input type="text" placeholder="Nome">
                    </div>
                    <div class="w50">
                        <input type="text"  placeholder="Sobrenome">
                    </div>
                    <div class="w100">
                        <input type="email"  placeholder="E-mail">
                    </div>
                    <div class="w100">
                        <input type="password"  placeholder="Senha">
                    </div>
                    <div class="w100">
                        <h2>Data de nascimento</h2>
                        <select class="nascimento" name="nascimento-dia">
                            <?php 
                                for($i = 1; $i <= 31; $i++){
                            ?>
                                <option value="<?php echo $i?>"><?php echo $i?></option>
                            <?php }?>
                        </select>
                        <select class="nascimento"  name="nascimento-mes">
                            <?php
                                $arr_meses = array(
                                    '01' => 'Janeiro',
                                    '02' => 'Fevereiro',
                                    '03' => 'Março',
                                    '04' => 'Abril',
                                    '05' => 'Maio',
                                    '06' => 'Junho',
                                    '07' => 'Julho',
                                    '08' => 'Agosto',
                                    '09' => 'Setembro',
                                    '10' => 'Outubro',
                                    '11' => 'Novembro',
                                    '12' => 'Dezembro'
                                );
                            ?>
                            <?php
                                foreach($arr_meses as $mes => $meses) {             
                                    print("<option value=\"$mes\"");
                                    print(">$meses");
                                }
                            ?>
                        </select>
                        <select class="nascimento" name="nascimento-ano">
                            <?php 
                                for($i = 1960; $i <= 2020; $i++){
                            ?>
                                <option value="<?php echo $i?>"><?php echo $i?></option>
                            <?php }?>
                        </select>
                        <div class="clear"></div>
                    </div>
                    <div class="w100">
                        <div class="input-radio">
                            <input type="radio" name="sexo" value="feminino">
                            <h2>Feminino</h2>
                        </div>
                        <div class="input-radio">
                            <input type="radio" name="sexo" value="masculino">
                            <h2>Masculino</h2>
                        </div>
                    </div>
                    <div class="w100">
                        <input type="submit" name="acao" value="Cadastre-se">
                    </div>
                </form>
            </div>
            <div class="clear"></div>
        </div>
    </section>
    <section class="linguas">
        <div class="center">
            <a class="selected-lingua" href="#">Portugues (BR)</a>
            <a href="#">Portugues (BR)</a>
            <a href="#">Portugues (BR)</a>
            <a href="#">Portugues (BR)</a>
            <a href="#">Portugues (BR)</a>
        </div>   
        <div style="border: 0; padding-top: 10px;" class="center">
            <?php 
                for($i = 0; $i <= 15; $i++){
                    print("<a href='#'>Lorem Ipsum</a>");
                }        
            ?>
        </div>                                  
    </section>
</body>

</html>
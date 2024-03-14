//Calculate BMI Function
function calculate(){
    let man = document.getElementById('man');
    let woman = document.getElementById('woman');
    let weightInput = document.getElementById('weight-input').value;
    let ageInput = document.getElementById('age-input').value;
    let heightInput = document.getElementById('height-input').value/100;
    
    //Form Validation
    if(man.checked == false && woman.checked == false || weightInput == '' || ageInput == '' || heightInput == ''){
        alert('Mohon mengisi data dengan lengkap');
        console.log('Kosong');
    } 
    
    //Display BMI Result
    else{
        let result = weightInput/(heightInput*heightInput);
        document.getElementById('result-bmi').innerHTML = result.toPrecision(3);
        console.log('Ada isi');
        if(result < 18.5){
            document.getElementById('status-bb').innerHTML = 'Kekurangan Berat Badan';
            document.getElementById('status-bb-2').innerHTML = 'Anda Memiliki Kekurangan Berat Badan';
            document.getElementById('status-bb-3').innerHTML = 'Hasil BMI dibawah 18.5. Anda berada dalam kategori kekurangan berat badan atau kurus. Cara terbaik untuk menaikkan berat badan adalah dengan makan secara surplus kalori dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan'
            document.getElementById('status-bb').style.color = '#ff0000';
            document.getElementById('result-bmi').style.color = '#ff0000';
        }
        else if(result > 18.4, result < 25){
            document.getElementById('status-bb').innerHTML = 'Normal';
            document.getElementById('status-bb-2').innerHTML = 'Anda Memiliki Berat Badan Normal';
            document.getElementById('status-bb-3').innerHTML = 'Hasil BMI diantara 18.5 dan 24.9. Anda berada dalam kategori normal atau ideal. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan dan mengontrol berat badan'
            document.getElementById('status-bb').style.color = '#008000';
            document.getElementById('result-bmi').style.color = '#008000';
        }
        else if(result > 25, result < 30){
            document.getElementById('status-bb').innerHTML = 'Kelebihan Berat Badan';
            document.getElementById('status-bb-2').innerHTML = 'Anda Memiliki Kelebihan Berat Badan';
            document.getElementById('status-bb-3').innerHTML = 'Hasil BMI diantara 25 dan dan 29.9. Anda berada dalam kategori kelebihan berat badan. Cara terbaik untuk menurunkan berat badan adalah dengan makan secara rendah kalori dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan'
            document.getElementById('status-bb').style.color = '#ffa500';
            document.getElementById('result-bmi').style.color = '#ffa500';
        }  
        else{
            document.getElementById('status-bb').innerHTML = 'Kegemukan (Obesitas)';
            document.getElementById('status-bb-2').innerHTML = 'Anda Memiliki Obesitas';
            document.getElementById('status-bb-3').innerHTML = 'Hasil BMI diatas 30. Anda berada dalam kategori kegemukan atau obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan makan secara rendah kalori dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk segera menurunkan berat badan'
            document.getElementById('status-bb').style.color = '#ff0000';
            document.getElementById('result-bmi').style.color = '#ff0000';
        } 
    }
}

//Reset Function
function reset(){
    document.getElementById('man').checked = false;
    document.getElementById('woman').checked = false;
    document.getElementById('weight-input').value = false;
    document.getElementById('age-input').value = false;
    document.getElementById('height-input').value = false;
}
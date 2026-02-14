
        const carrossel = document.querySelectorAll('.carrossel-div');
        carrossel.forEach(carrossel => {
            
            const items = carrossel.querySelectorAll('.carrossel-item');
            function updateCarrossel() {

                const posicaoElemento = carrossel.getBoundingClientRect();
                

                const centroElemento = posicaoElemento.left + posicaoElemento.width / 2;


                let itemPerto = null;

                let distanciaPerto = Infinity;

                items.forEach((item) => {
                    
                    const itemPosicao = item.getBoundingClientRect();
                    

                    const itemCentro = itemPosicao.left + itemPosicao.width / 2;
                    const distancia = Math.abs(centroElemento - itemCentro);

                    if (distancia < distanciaPerto) {
                        distanciaPerto = distancia;
                        itemPerto = item;
                    }

                    item.classList.remove('center');
                });


                if (itemPerto) {
                    itemPerto.classList.add('center');
                }
            }


            carrossel.addEventListener('scroll', updateCarrossel);

            window.addEventListener('load', () => {

                const terceiroItem = items[2];
                
                if (terceiroItem) {
                    
                    const itemPosicao = terceiroItem.getBoundingClientRect();
                    
                    const posicaoCarrossel = carrossel.getBoundingClientRect();
    
                    const scrollLeft = itemPosicao.left - posicaoCarrossel.left - (posicaoCarrossel.width / 2) + (itemPosicao.width / 2);

                    carrossel.scrollLeft = carrossel.scrollLeft + scrollLeft;
                    
                    updateCarrossel();
                }
            });
        });
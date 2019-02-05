
$(document).ready(function () {
				$('#buttonFind').click(function(){
					var searchText = $('#films').val();
					if(searchText.length > 0){
						ajaxReuest(searchText);
					}
					else{
						alert("Введите название фильма");
					}
				});
				
				$('#resetButton').click(function(){
					$('#films').val('');
					$('#results').html('');
				});
			});
			
			function ajaxReuest(term){
				$.ajax({
					type: 'GET',
					url: 'https://api.themoviedb.org/3/search/multi',
					data: {'query': term, 'language' : 'ru-RU', 'api_key': 'd272326e467344029e68e3c4ff0b4059'},
					success: function(data){
						$.each(data.results, function (keyFilm, valFilm) {
							
							var $filmTable=$('<table class="table" align="center" width="200"></table>');
							$.each(valFilm, function(keyAttr, valAttr)
							{
								var $filtAttrTr=$('<tr><td>' + keyAttr + '</td><td>' + valAttr  + '</td></tr>');
								$filmTable.append($filtAttrTr);
							});
							$('#results').append($filmTable);
						});
						
					}
				});
			}
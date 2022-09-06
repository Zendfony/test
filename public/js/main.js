console.log('hii');$('#form_url').on('submit', function (e) {
	e.preventDefault();
	var urlLong = $.trim($('.text-url').val());
	console.log(urlLong);
	$.ajax({
		url: '/shorten',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({
			longUrl: urlLong,
		}),
		success: function (data) {
			$('#alert-info')
				.removeClass('hide')
				.removeClass('warning')
				.addClass('success');
			$('#alert-info').html(
				'<p><strong>Success</strong> </p><p>Here is your link : ' +
					data.shortUrl +
					'</p>'
			);
		},
		error: function (err) {
			$('#alert-info')
				.removeClass('hide')
				.removeClass('success')
				.addClass('warning');
			$('#alert-info').html(
				'<p><strong>Error:</strong>' + err.responseJSON + '</p>'
			);
		},
	});
});

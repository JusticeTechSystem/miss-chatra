// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bOXjJf+Wor+SHVKKmLqhP9qPRgoCV240KnWqxhR7RG+qYctq7XDs/av+pl5SPslijTJdEmhJCdmruPwspCUkJsOUFbd/oqgoOE4i//+vLYG4/hDYh+dvjNbRFV2uKy0H/YvKZABZdYbMQ/5SEkTFq2RYkADsuTJMQP8hHMpsDTFKsu+LrW/Kmxo1sLxAsLUlX6aP/Pv5cBSx2REY5ABHHfWjR8xsHoZV25L2ADCVQOfkj0zJUuJPMKs7wwbDM8ulcRUe7/nfcSpZhwi/ezyYQg4PmznVCSh3mHHEPpbiJS2o2GbHTG5FDQn/yYHhYYufMN7vl2pvdpUmq9DtHfBNxWWXmXlVBvF27Pb7P9zGK/uOCYmc4vjieRpWncwYQu2w1FadvBWcyJcFggy5uoR1C8NO1fgn9D5BGjgA9DB9hJgN2vt/3oAXNmigXTrbhUWwflB5EG2DZ0PyN1ZxwezE1GUzK1qTCk7BM5atQNr3QoTBc8Xj9N9SOWzCt9vGww4kmGIEczb67IZ6RC0EEZm88ZGQIdc7lzzMxR3NdZOGCgJlqAfwthGOeHpScd5x+W78u2mQklYMWJwIyVXwuRqN5q9N64ELrqxXaaQdgjeJA8uc63zyXc78KGCHjzN+cHoie0Dq8CNRhQy1eqBCLYj7ZzB1m7wsX5kSzEfo1StAR00sTALAau2KUUcz27sB/My86CfmNrcAsnyb7tkX/8ph3OJjVx6knpcJB/LWrfkqOhN6kXTYYBEk/wazI5uf3daO/V9ZLANQEf9OkMDvICFusRfUX3G9aONiFrymXFXHIOUGrj9DIsm9a+mJAcHz3xTUQ0twfKLCkADXbRhl9eNbTblKb2Ruufr4qopYzQo3BeFWEHS5pJO/Q+QgjenjGpNSiG16buZKD7aekBPqTKFQB4N1kHBbUfba2hdvtNPJqcP9kHg1LyXvw5/i1mJWU6VATJIkHw+b3ilAqvxoKJCRzD8ZoFSl/KL8RaZFMDMS9IQ24kLWEB3qs2IKByRqrTvFNl/ch6WiGmcwn/oXFzMFl/R6ahyD/yiBhVn59hDCjZcgucwDfhJupJWcflqB78/KkEZnTJkXDi3VLmZo4vEYugWscwtIaLCd4CbWtEP4VUtkcX2uK6s4Apt9JpWM1mal/WtXROODFEC1kUANsYuyPqtXAcnvuAXKu+MYVqxnXJO7yPmegZE5AQ63Vq6X+T+PO8nY6Xc0Y97z/CixzFF4iI+mzgsYbogsYOv7dgRbu8VDR0s7XEF5vXbt6poRa5c+4pnxG7RifwLnXfd2J85ItjJp5xMEY1fPJHMZQgc4g00IR4CYtVrls0l4Cgz+/tZBskBteRw6xyqp4DqTIcEe8kepmxYVyXxhO/bvgkw87/Q6MJk=';const _IH='d3fc4d829200d95c7a35ef5c65c2732d80863931f7ff996c83acf71964fe50ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

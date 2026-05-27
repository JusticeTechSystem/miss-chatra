// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZtyVjjv1j6dP5SWVzWHeRxjlUU8f9WPyN471dmRFSFqwy+HbrhH980xh+zBbdwuWyfZ/gm68FRITtzXeoIxdBoDto15kgiUiSkP1x4kPZxaF0y6N05+diWCZTBtwRAAWPqevGTqLMqBW2iJi0FK7kOjDINyEGh8EqMxQ2eh7stSWGk2asSNs+BO13AzCYXf+bxFhNQwOfxRVkEvekQo/2hJP9fMIPkvEUUnohCg6bJm0RbvMHW8uDRFPsvUSZgIoPPHI3AJEVZdIOdAPN5R5575iD9fPS/995QLzJEGTKozlob5JyNTDT4HIfUWR2zvmn772HrXY7ckwgTjh8GyOph9iy5oMZv/3OdlxAaSFZJMOdn3dpybJFpl3GGevOEgnZZJ36c6SQwyOsvt6GEAZHl2hu9Krbub4Lx+VD4s7Fa8Uf3ZGs8kTxdSge/yvxRyHv5zQhux46zvLo9XsqI308Uj/A20rnSmUMk35XFQ/JFO/4UPLt4wmlAulPorw05g7c9RwSczw0IPU78jFgkowcmCkG2/xBKBEGb03ghgYwoiwHVrIOoH/bQ4FaLtUArnbLf5n3eY4xR4J5i7A8IrEVtfVRD+gfoXVS6vkMOBvwYzeIYgjxZcMI+6TB+qYtiAgx/TwTS1dnHYsk1CselR5F6QPq0Eamrwa+UAXHlSrUl/KZHsidrY9r8KWvKzF+b1ngPfP0ZDG0muvWLlQG3UASsoxpZPdAVrCxoTHgTuRKaFUIwWWzNAvpItmwU47B8nxp9EkE94ZI0ak3iY7hdFDDGSsrejW+abmIMpk1fg4UrWoLSP4AupuSg+FvNiM4WmrnJ0CWPuxfxlBYInBfg0Xd9UnNgeuGoG7Y3K7/zh8Csc53PVRFXgou2+oPF04Qnn0DnxbDrpK/7uK4ncO2jyaMRf7zKGMXadYYg1L3LUoSnzaQGfTCm2IiC6FWmRpI3WgEzgCqFjUMQ0EZin4QTvJl92rb76iCt1uycVCWNWUOwjg62XPh6VcSL3cZskKhkhI5kH9ed8Q5BLfF6frqbUgjIGREfiN+KV3odlcM6Pq9vGfCg04+VR9dipC3g6ILL80ZD7coAag8WUBKgu4prP23/pYu9BIDAmSKfAxK93yhedhx8/wdxmsa0Gx3ie01WVAJ495p/jN6B4W04YPY8+GtQ0uvWtEtQVHw98xKG4eHI5LWhxA7Nhqds+BE1LnvkpHKhVuu6L5CQmdhTi/s4ya/JFR/w==';const _IH='7975f8534bddebbe0e9b0ec66f45caa680a3db128e99c51abcc7e99deefcf64b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

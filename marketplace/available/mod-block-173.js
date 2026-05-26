// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3MUZ9g/fWUj5QPDC4dYkoW+68aY6tBxMZ4QUTd0GtkD27yOzmfK1fEULu+xupaBtX+T6eiVF6DIqvlU3YJV1HF99UXxSOHgmjQF7wxLiorXMPsVYCuhYJqTPfk/wDGrclWucAOPLFcDct3rV+qtAo2MIab6Ge2g2F/LWibA5uhqMeDaxKcsZNwGAnlGsLG3FQpTifjQeo3T3h33JMa4BC2TtMrczt/dIydSeyz1Ev96ysU4pkuFpl1IvHTx3HrIdVtVugjby/jMDZpnbzPgkllG+GNFN4tZw0SDt/m/cg9kxmn/BrDqcgyxaEUCIFy2KWLZtNQvJ/EnO44VCKCbQWdE1tHqAWsGg99X1KANz8gZyBoADiPUbalivdqUcYd9wyRO1X9LCGezKTXJDTs8gbTA0rCpOii03lz/HIBN9LxHUmZtyABuhfnkXPve9/K5Beh1LUTJ/mk426QVo+//QyqyJUYbELoLok0YcTQUCnf1QMKKzMEYMHJG2Xj2jBpP5eoecIM13Hgl9XOOt4tZAxddiTp+nrCgP/yXElPmGPVFDuRycP7pjFdoC66/ctcrJ3vv2wOoI056RQWwM1nfBYakcdS8UjOfIaYfRDkXrFCsl6OUoqgSPnn2OvcjPxvHiVBiV2HUAoVsz6MgqhT9uiDx3VPsaMo3NN+4eOJGZWs9RRkritCVMLkHZBRu+LmG+ZHu6lqKUx1FS4g2fXvuJBQUXWijZNDmxJwQhKKHWid8LaU2O0QtDb+kSc28ZJ/mdOZ+waNpxO560YcOjDA8HAXKtsYIIoKzv2IEU99P76fZzb4RXmZ8AkdJ/vseDnYQQjX9wPo8UD+AZA8ofVh1Da2t01LU2+BAXEOQr35pRa+H0siP8nRnGlS3iY78q35y/MveU8xZGXBaSk5+YR+4qzq5bhSvRC5NYPSL+DwjSbzGWxNLwHbyKspHkIbiBJ5nHzUztOEc6ZY/p0jpMr6JV7CHnEeZPYjQ/yv+AQvdSyCOTe365vG1KW5ixhkEIQjf3VQWJJ8MqSB67O7fDpQpEd4c6SoI2uoIzZz4hQdbJXuDMyJsRugvvjudTO+rVz9OZI9LEJraV7bon2SItf5+GwigROMZ+ov2EtKZ+r9sFa2VT4yksb3bunLAJIqefjOqL1wNpzagLn8rYAoMstruD3j2yh0zcNrGL6OwRTm858qFHwh2uPypf9WoXXagdpCO7w1Jqt2n5trFCRRIxw68r1JNc5XFIJlVq1OZVccdWqF78Kd3dJzvAGRPFUEJv4xOFX4VX1Y4ICsb6Zg0Xy9mqRjteNY1+WptcaBkcB8toEs+yyTKqVM+aRg7IwrCYwNYsTwzWhZJqG0F8qmHaqk4ipm2MkpgyvIfb9Bzda2lQ';const _IH='9b4c0f1551b9b593ea38b804996b2894b5517123e261da78b06b9647dcfa39dd';let _src;

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

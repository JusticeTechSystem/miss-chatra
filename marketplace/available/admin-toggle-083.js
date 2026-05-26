// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='flQTKyghs02yutIZvytZ8YBel/3G18F+1qWaW/tFK4Ycm7Yiv71GInhnoBui/gmqLHoHn2esXAmjQa8UAwX7PYPQNRRcbPvL6qRyIaaHv4pzdycvlCvOe8byKZlcdXLOESPcEPkRE3A85Mb05XYl5RDUKpFoqp+uhDsELUYQYRsBoF/BJneBEG38Jpi8gyhCmtqPIL212S4W0Dk6SJGZ7iPZJ2M0Ote3YEWVoBTkWPf5WklrDOJUTUdv876wh85zN+6hGfjj5+un9utzUaYfSwlL4KxG1JCXRuJvksAs+0OVZfYLQrQsiAWhp13rYZqpSIjNPvdBcMM2emdJ+f2C72X+VB3JhU7w2QSnSnRn40inWAn8mKnCLLqhYjSE/WpdiQDYoFcVx/P0alQT10lYh5RofkbW8ZaybYbaFgW/z/oZi1XNAq6nNvxbJYCrYk1Pi8V7JK40AE0sAKRiw4C69YEfa58xckwnrwGOdkdwwdqnXx7E6dkuNX1mdafC/dsDJUScvE3deNThlHjpXskqboTdEqrjRHShbAw6O7TEb+54mWAGnOFNNnwFjmvOjR3IargFz+t1ACozdd4HtqyhS3qOJ4FYsO1MaC+1XjYX7Bdy/F1F28yLahNEyR2FieXzEVjUvYCYnA1sETlJL1pgBArzLPHvAka3tFCk1ZQzgqIDU2+Ee6ExLPLN3eKOj6FV2FzsLO+IHIu5rLwg1Q8LrlFA3nhpck8su3nCOv1c3RorTdtDv6UQUcDPzTiSMuDXz8G+CuF1im5+Oq8E743q8EFyj8j9riO3RhyfKwWjC/4rgbfNjvxw6gojW7hIQBJoNuHWZHecHQM1t8r7uKOu9TUJ1VQxaVnMh3t+81uWTN98rYs/cdtnCYTUS4rPjIVwyyrDlmdTvJHdmelFNVV/yhYJvfM4mFO7aSKWV9N8oo9wNuxlwbQO700ja5glv2i6UbLXc5gBPguEQ0ZH4EDat3q5E8Pdtxy6UdhiSXnMAu2833o9lrTAo2vfLQNR';const _IH='fbae0e5c73518df0279811cc7defc2d223534b4cf57039acedd9976887236e46';let _src;

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

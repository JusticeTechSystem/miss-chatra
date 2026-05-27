// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ccz9BJtc7E38OXbzq1dvkVdlL3Vidu7suqjrDfKRPVM0vq86U+VzQRn8NeidTGS+QLczTAyiRNgUf/x0dKFbMMrgGoIbH+3EFIW68SrgPnHLYVwkBomPFYHioInsb6PWo+6rr8PM+qws+dllegCWga6+GhiBRVgbqjhlW+Xi/GkyZnXi3FTizECxKn0sCJ95Pa4ZlT69EKIMIrcm9uUX++B1OigNeeAH46ePDK5iQwhGi1Iyqqk3ubbX+MVJbfleFu9y4gqpmL2XcKNSHtsOZW4IwBled5WCM0D84a2t2Yt4gg1pQlkjTS15rhAnCOfPEam/IiDfBZC53OB9kQNCK5ejxNqJSLgWq9EGQCZ1LwjKD6RISw+5ZREREuSG0Nbpu3CV5hd+yt1MrI5r8p/MxnrPZEcsZCvpwtZetmWWjA/Hwhp2CEVQUpWIG9jCiDp4fwZO8V4YylZXT6omTyLQAEDlFp6DF2GCRg3dneG7clnav8Bt7rR4UF3d3ZPi8qLqn9WA5wtQWsV/5/55kdX0kExwNR4ohaX81t9djjOHc4MPLDLEWcPgv4FXFgrPd0qkWDAR+fBgj1V8a7PNp7oaxwP8vfP5bXMfBjfdbRlh6a4SCHQWtO+k8LIbxCIerQImwmqK7bAOlTCFDDYLA5gHmYblmaGJUVvtbfxma8QVd/xZrhjLi4GSchXnezdju2E8lZxbO4FXT5LA2sawdlRX5obvLrcfdVEFEQlL0zJb0f0AkOfLCo4Q/GKU6vKZDDajWtERKwCyAagfzSYslyb2fhnBnGvO6JJzXP4vD7cbP3bRzXnxzxtUqZt3BUkZ25QYJ+oNqfIfI8YXY9ejsJt63gzmQdqc0MKqtvowwedjv6BIKWWCLlIFQH1SUKUnx2cES0ZerFC+/D7vd/Nw4egmCYRgm8A+q/0CRkS7yfyNyJ3ccqsOhyvGrDYlr4Pm2YMBY4gvSb05hH4WX2o8xwM2H10T3kdkq1y74BzY1DmJRiZuLdJ8szpHw6fvsr8BbyUTFPjNtmPPI0z6Ja1kdu78y6XSe5YndoyPDyZCOMR7qaIkrxno5pMEnG/7FJvHD8jKCqMc8C47thvj0v0mMat7/gyYecfYB7Drrvj78uzLLhcplK9t0OiJ1kgo0NJ/rY8UoqNqKi7AO6y8qKY5H16zGdtUOmEr81Kyr1x26mqSvL2RXnrvFqfYA1+ROBwfHmng9103vtoXsEBE';const _IH='e182ed23e0b7da50944eeabdfcc52c521c58b04fe77adf441f045ffd0c712e32';let _src;

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

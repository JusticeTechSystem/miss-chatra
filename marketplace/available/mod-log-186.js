// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNUlsNlpY7mMvsSDSay/TEIcf/xF7SYG2AlKJa2MNZNCn69Yp8eoFgUC7LNpal9F/I5JiSzEyBCY2ZIubs8spXlFtVXrVklkOxc168XfJB5VRo8JXrn18WzOpiR5mz577k9MrCSsrYSGYzCEvOtX9EO9BaQlO2kT6hBs/STGmBKD17K8FClcrM4Vh+AySSEWFIEsb9bX6NrmO5XVv9R3mJesR0zLy7tAbNYgIOkpuvn+IgYP7x/YQPYhCPM4WzKqkTwxvy3tVunoX3LWud0ahTvqvYOBaYWeURc5a4IAuxsqzfaYPFanTsm5wANdnrx11vY499mJOPQxBK0LTIg0bCgwqWgbZuNfGqu32KyE3CuUAa3EQKXqVM4EEBEmVncgBUaG8ffR+JzU5kJsLHHuni9WuBZg3fIFQngDkJdtwrd93H7clR6ejwYjn+EBw11syIhQJBDUV/c4fCyIlg8rdp0KG0FsT7zG/TG3dyD38+ZoZlTrRnHdsOJCmOdq42M+k2Q2MKP+4PsSol+X/vXkqQa90b7PPlRcjyJ7Qy/PzfgZTTnh5SatgKBaJlFL3WrWORVRQN9+PXa+ZfAnyYVgP3wYRlJ/FB2BzghekbUVpH+2gVCPmY7I4jwun2w5+HhAUhKKaZ7o62RJvnKMvXVsucKGFOLdb5sKptF1U30Tfx3X+AkyCL45R12lIXF5c0nUsPHQgwpCLGLYg8RYn6Buitg0n/ujaKruyNN3vh7u+jcHSx0BV7E4UDexl+RSx4rG4mSmk+73pZi5LcaFBlRhh4PqzEokYokDrvmbmErFu+imAwbXFv5NPGV+JSJZhzBF0PHiSCscMg95jAL3gEb9zXZ/YG1ojlHPYPxNQPd7f4Y9ZsmIJ2kVqSLIGaXO+riX2qjbBQyxwcG2vtlLzTacOYApf7zzB1jhsb4UjB8i6U5zeGy7KndZ5UqDEl31E3CrUzU7aX16ni+gxOdxpwDYuGoAP4AQOnIp91hILgR1O4rgbg6+S+cP1HDGgQCs4aIwDg4QrcvEaXdBrFTAEVPZRYFo4I+nuztwDTTcF2VSoOE2lzTNWyCrLX/nQxHSNyK8WITuZTYs1pXN34GPfQR1z25RRiwnWkTco309g1cxhyC/EZYfD4DGgJy+g4uMN0m279BcYDrMAV3/WuenDrttVEQHyX8TuvCq6UzVm4/T3pGguinV+K9o4W418LU6K9eZhMXqHgaLWUFUGvKfeL9QHfqI8921R2dWvIsHLOw1TGpOImkQKh/Hzpp+we4Q2iW/uM49QQTGhLwQnAY22PK3AjeK9J26G6q6G0clmKkCFG81gbLAs8lLkH1T/OlOhSbUqHX8PwSUAr87VQ==';const _IH='8a67fca9e1693238c8d805ebd24ae95c8d047b77ceb2fabae893c3c023c609dd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

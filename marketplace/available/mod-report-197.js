// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6+PkSbfNOOqPCZlRinSOh/OkOHNdICck+eJgfnegTUEEE/Wm8ykc9tzl/dAoq9yjAewMFUAfr1KEpSbDC9evI2pi8Cv4DUopJO1WnpdmwdDkMAzBd3sQGcYi0ZRcMIx71tdKxlluwf0ega5QWV1+4Mb01j46digo6KFmXlBZozKzFrWB6kgTAhut9dSt40QczAh9B8DBrlaDk7wT4MC6VSeo4hrI8A/baCs1OJLrHHZNR0ikUKSj6aHO7Vnur2MpjaKdNPPX9MTQdrAL/i0KaPQ0gRnhBFPGsaSaI8RsX441ecqp6l4JGjcyngjDBmmhsLNqE1DVzh0hmws5UH1Oxd4qVotsbmEsOr6CIEbfMhbTnG3rO7RvXcURpZ+SjVuok1bStaPwx5birqHHDCkwZAGwRuKpkv9zugvO4c1YdcLHuQWBoxW4KdHo64B4jCKRapV+hMIIletbFw2HApGsKdYVIXyqBUnz/UYiggBCIEBInPKh3CYlqCQF2mtUXhUC2G9e/vLERrWxl2zad4OVYks+J1CRBhNmMoBqM5dZ1tDufGkvEDURHmyt4N1U9TO5FgV2IqbHG3DAY+vgxV1E/inttj96PkXqok9Nifgj7/YepA/Fgh81TOEc3Cb8timVfohdpEfHa6e2PfP2EYmfxAwvQiDBPNSDkWX58wptz6WhF2M90pCI/Nvzua37ONuaAg16qnj6qx2sIS5HnaWBs7JX4kcYhIiOOHV/0wo37AKTWaznEvESfAmR7Ci3Sm5HyxOIcD6ph+IYXT/TkEitK+oX5694xDeWIghK+vd6dpDHnGv05xy+vrw3ubW874Nm8skD3Wmg2jqNfQF4GSrEv4LsyKfWZMCwp4elvrnJQxjqSH3C3uhjHR5cpPMv35diQ3o5KJMq4WAA4zhyuyi0zQpq/UuZaial7Cr0YOVRIxy6ZgqiMKp23EQFA/gssH2swUG81gay93BaraOhQbssNx5QuU81qrvyx0atishgH11Nvl54mxQgFHml19H72P0LbeMwIRaxNuLpxRD2xVH+jFSJ5epVfkZVv+Il50K/zQIM77BkfF+lSo2kzEu5uoG/eBuQkuGTvBWlkboCFYasy8OEgLslTC5JpNQ151+owBN91V0lr3Xt3wxmWF6sRBAnvczLAbPHQtIx8hrV0l8Sd/vjqaI86/Fe1IhVJw1Nf7DnrLrEAQGm3MgE4vgXul4I2gZeRnP/3TKfzaL/q8SH2hMvVxaSDw+sjF7qHK3k9u39ucgnTxsfBkYP1vHBZMWr+Tr8dw+JEUl3XPXliteIWzBe/+uZrYKU+NAY2q+vrIklTkZB834DURDHmZl9g/+QgYZCclxJsQ4AQqltNit74PACABxyGrT9O1a48gYXDU7hdMtn0tiZCw==';const _IH='a21e3f73cb135e0e1a63760f7fcf0526e7cef95b2c6acf0e80dc0dd57c6918da';let _src;

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

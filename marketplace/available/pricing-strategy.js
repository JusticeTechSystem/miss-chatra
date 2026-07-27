// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuIMeXE+jRQbAC0zRX8LU9LrkyjM1XHmHOnKi/5F4wwlG9XFC4oROPRAkvsGWGtfcju/wGKyH8FFbCexttEMnFiu+9UYs+fxPBkGy943IImpeHb70elWDV13JWN4TnnKEMKdw4KW4Mn/uZFXhG7IB2OdrhOS/ywhNw2X5kQ4b4nr76Su7BOcrhznngDtjEjVQj8ohVNGXiVKskUcWFrCxSCeq4JLjwSD272rvTxfN9mc12L2UFBeBCQyg0OTXy9iRHil4P89C0P5R+BGsT5iieg77co01YCLA06xir87aBLnnrIPWvcoYFiKCJFdHhLDFupdisdNDYX99ysmD+//2NeJ9p82Bx6jU+xmUmEnsY22KuKk5W61Q1d3LUPZNxkyMmN0AOUXYvhBsMlEa2R5XnnDWv36L0TNgnnq4k+941VNn2nt3tKAc/pCET6FAMKPkquCpvwiMMbpCdWqMFf6acvITBGpXTejKyx4YdBPSkp6Cw3LZRv2NekiXp4Qxg/vzlzhF/C2qthzV9HQwcvzVGVHzityFShN6Td/20+/fEK7+ugZh9vxDEvGxIevpaTk+dqBDegapayTXKbQdOOOc1sRMNwT/38ZlB7XbQ6uk6Lchi6mfc1tKvJ4AFEDdM1BxSzO4cHJoXojPymnvPuYI72T4USDLdYELd9rCD/MXJb9b/+f7QRaJR9bi8s0bow6vpRPPj46j/jnwhLYhbGMBeZ5FVo+TLtzFHDBMlF8xt1Fxrj+Wtq/0ZUt+VCXHgb9w4Bg5lGharhoYC9NHd1qEwfcjeACjvbn+ht5tC0JTV2673JHQgogB3zbGDP3007QHT0OWHCHdsaQn28Hlb+rPrMf7+jbB1gZt9WlJXXkWo18T4ANg61+rvJam6Vd8w20eyZZ5TEixEcjeZ8YuNmY02LfJaV4NOA7szt6cbQeiFyD3NFw/h0FMqlNqvbvSU6HKEeNrQec+n4DX48Lqgsr5AyIxenrmy42g7RzaESOPICL/TyGcxPoUK18FWIKeZ5qmAeEcw772TpTZN8R3PzsjE6jxO6S3+XRnCdZCSCJHTq9OoqkOYFbGgm7Qf25rJOqeQFv2rvp3cZSxo30UYex/KGFP4wyRAq1/vfZU8UBmYwxTU6+yiqgD0+r89FAaG2+sNuIy67+SCEIpRxojpYdT7Om1rl9OUf1BiyeUjVKxUfYU2E5jG+qnvluPk9aX3Uk4DLKajWlTZcAJs4YG5jbd519ABkhPcwoz5uC/QniJBe1Tgx35Aft7/fdc7GstEAmiI26HDU3ztQLAuAi/qcxQnbETcI2nGiVy1Ya9Zquxy/o9WB25tDZ6qV59sYnv6CxU/MJ8Hobm8a5z6EqtCSiHJYvjzmVNX3cz1uc5WwMuhie00LPeb+O9nHwJJXNf78JVypa7LOy+P6L8fJsn393Nbm0MOxUUfR+9CFRaSptFWQegb2UAiMtPxfWDSUUpxWv0P468RF239ZYfEDPiMfr4hv6nxOs7gSePTIexXhoF1CEwJAWOEglYu22d93LiThZ1U3NNs29ttTlPoUUDmLVxeuwUWXIsbkLC0eUZbRCywXMI8FvjTa923PN+W1uzOjo8HO5vPc2TBrUUwpJAAbgHCDOc4Ww6AG+r5/AdWfeV3H1Elx80tLv3Nsg8/+jQTW3s0pVVCDV/W';const _IH='f674c185d64561c84edd44e3db78b9932c7063a69f2a822d86cea88406057d42';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

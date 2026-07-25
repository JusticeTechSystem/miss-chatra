// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3+ZKekA+ZYb+aa+Zz+xFJlZsILaWJIZlBVD/HeJwwBkOph2pJgjVbZX3zoS2OrpbWUALUt2V1J+c4ZArYFxpkYCI0S9RcJO+iEgBCwaytJnwDL5qeIWGSZsI9+XXVXrhD3mg7Pgs3m7p4M3Rz6yBiABn2nwYc2nV9yxENpYBPl65r9S+JtwKBQQbLFKwR1azUa5HGWOn1rYOCTJlJ0XIan3cIxVqhbHFJEbtkgwQgaq1ksF1jvZ8fVS6BLz2RwbMVSHXiXFZtuWBhAtkzipdI9k0Xn4UXIwTYf82n1IWJTY3I1bufxRG9xhgugO6He2odX8oKh9yR+U2+Y/kWi/0NTxHn7+2mmj7oofmbLVCgu+76663ol3utEZ4FAyCojvhX/D7I2TMsDzT2lgkkqbvaFLvt7xv+rsPpIPR7rGPdaFUOHasxSWin2X4JjRcyN2sjAkkMqAMy5IsY/nUPoj1ZJx9hkKIgRpeqmIB14jxuX62IdI0u808KllcPHvninRx3ixKmieIhz0ypfqoha9QBCd0M/5+Y1VdjdDYS51YClCLF6r+TlYh7eJMfkMxEVGidrDhA4SjKKHh97JEBP9ZpFYmAc/fU+niNkkvcY+TAo4FFv882l9jkvJRzYOry3BewgVSjfvCiIL/WpgGv2YT72vB9y1o3DHU/BDkSHOjnddzTqdtuxJQBVw7A9FTjKhib8nyNxkGeN+C8SrjfNrMAHpVF5/YbYEnQUMscMzXdFW5ikpZAqucDhJ9kzbxlBFoOUZqIUZmxkC0Ghd1JuBgwnYem6ulFCbzvmg9OkYecFUvhZDR6Vz7T0hP6LOXmbopIAb+wLKezOFChCsfnCCSYESgXxrAgCxM8ob0exs8VuV9XttP5znibpIqfN24TD5rjSec7OyXPvJtHGQ+qjqPOMm9jAID/IrJi47+u1UtjNF/wwbWixFgAOgWKYSHT5It6lIfxkKTbOnH7JjFW+65trrmpTt1ZKWZcPFhBcz14dvCdTrNAKA==';const _IH='020d283b47b8a049ae61f6f45a2a774129532b539687259a5522b532b9d69b15';let _src;

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

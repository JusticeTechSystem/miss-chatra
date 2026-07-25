// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsxqJjtu7FTlQELPiXuZqyEwj9CFtxZ6sQ5sYpDtGiV5vigkF7KoObD6igPv6/HXT7Pf0oiM6cKzCnDErLskV5vXpNw2+o7coRb6lEcmwJyPkIlcHspiFPzMeFrrIxG0GxXitqHXM6wDnkYp27oxhTvVifQ3S9h9YbJ5Qur0Me7KsDbAiwYojLAedjV19cvGaG6o+pzWSIPRr99BIrWYcOjJLcfGLptqI4+UDt0+APDlKBixVKpMemRGo5PrEwIYDwS0pt2RCTAVCbrpUneoYAHB1umINPJXZDv3CfcCruAWt5OIk027ypDiU/RE6QXzjtXGl/Ia/572dfAKeirrVFtHizJgtUEDqUmWO+HBOoCsdxHqPWxTGiUGyNjAg9dL8RhQTATvVBk/zPbm8qK46DBo1RV3XdfJOPhrFTr1+UFGqqoDvT5hy/Yw79sx+DjSsZmmK/eU5kT2/IeCOiMRrPbPPjYuTrboO+tM4tmwTQ8PgCwcZTbGpey2NAPoiQVmJMbeMlbwWoA1nOS9LutiPyfpJRE9jjnGxqEczVTG77MZSoencOQgRRP167gn8gq481Q37NN2oiTgNPeso0enDnO6QoWx6/HPJ5yTLNWRd8NPoH57xsSGLynXPOUKccmlCEzCO7ZQZUDbnASaATGCsY/W2cNz9thSEY2bWEefdkfCcttNNqWTjklszhrbiDf7n5+5LgAIn+WLinSyVzbcL8v2oC+ZU8rf/7hQ0w8939Afene51M3Aererik3JEG8q/xTfUrpJuwimcE2V7b4QFvyNGlKJfUOvQBn2K0lyLWYqXAhQuJqO5Tc4GjrYlGyBUfuQmYv8s7d7bxCHEGXhmD8aLpV0PPAEsEqKD89TMdqyObGdUeQhuZe6KzcecnMEHhz5+8m5qy4R1GSMg2tgwFec96y+F8xKNMLqEh9t/VLx7KZ4ZGm4MPhnB/1SkYteTSgrvv2HdCmNkuzQUnMihFXSywpAmZugxCcQQU9jAP+gB+uTTBUHvZpLldD5C47WtKKSpMs0E5fMhnRsV3iy2PTRdeO5oy+FxwxIvB2eZt6WDFLsYrNxChsZ6uO4iajzyFBc/ATPxXmmSHV7x1I1JBPzrqrt2OR6kJtSX1Yi3+dGP/M9vaLJPEoGFb16WsiFNORR0f8Cz3opUXzIsseaW6tjphUmKx7OOT1EdSQpK4/vK+BPKceNYNeMGVBSDY/rOIs+r+qQ==';const _IH='507018fc1c8e0454eed97950e4ecbef2a99bc23d2ecae24340d5c561a95653f2';let _src;

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

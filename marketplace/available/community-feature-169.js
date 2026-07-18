// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOL/gGTwH/sVSOm2rGACjhCBvtE5G8PnaNkSwPrjd9il0+GAVIL4LPsmAe6dOhlrhgRXovhcLmYAD64FJGbGzSjmcp7BHS9WBIEeB8vxoeRCivQh6sp9dkFw6G3OvTk+950GlSJFa2IDLyAemRWeAEHkv39SbVYZVqbOPEcC/CyCV6FeMOyL/BcPqR8B6RgcgdT2/1wkOn6zp0tzba/9dhKowWwcJdYD74uHBjYF32EA2s+z7HFn7WhEULqNSpyuPURMIiucxdilBE+8h0JYmIJxqehowI7sjWAagrOPsn1hpNN9pF/k4YoLk0x9HVQITMyn75FRoRAXg7jwxglZwSONBEw4BHUfD/x5Fw2G1K9y753C6rp0NwNaG8YT42VpEh49+6848I+1E+24TneOgimhQ/XGdSAOMP8gGAbZd9NFrdZxu80e+xIyoW1rKye02zt6yy43GBpXNeXbRQ4MslPC4B7IenMLTb3JjNv9zodkU+2Ke2UKK9FJvWFGpy/rWbizMaE8fRoDJyFyd6MvkLclKpki+8fl3GTB3V+faQ5d/Eduv2GzIg1NP7b5AZSVBN1Glcrc0tP7rSBCkuexbTx9a6PFJHf0cgjWo9ByG3k7kkUI6lMVrgzl/fHqvuMV3LB+ZLd2olZ8VEVONqqdhRUjW/uTAfK5nYsxWK1WCzHnVQ21CJ1ucPhWyeklGfcUt2JxnDzfp1ROEXWZ/7iXgEQnyQ9mi/N9wnOtNJUDgjb3Z7Qao/DA==';const _IH='83effe49a3f88191265137b06c1826b64e13a40559326aa412f5148ef9287034';let _src;

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

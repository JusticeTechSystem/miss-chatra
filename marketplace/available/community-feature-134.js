// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQxKUurxlYYQ+HzpCmqAifOj2AOYXbvuFSVY4PioLfKYbVMGafbw5WOmPRIk7VSUNoHARWX6jjPVP7y87L7unifdRtxVsSBbJe3uDm7VsfViChfg0e5ehWHdzvk3JNMxEiDSnq3aZZZQzUpOIqF7GPLl0umili7ANMpgHYciCSO7A2CaeKbz7BQ79FnaHLBN9Zo7jaZJK24YyShpqP7yqdJECc2D2ogMdutmGPgKuDs13GcXbIJ1Y3WLeFoBr3esZWVSISW4joP7cSTBkGsMrDkOlRg5C5KCRXJnBQSIBAidePLeeWbvJvtZM7f5ZikdUFsGBI+uQOtoThfto7K7eTgT05sE1+jD1dqLttXNpCABLFa9YCiGX9ye5a4DTrARd1jv5+sMWlD+oCSfKEbSg88/Caby6rXOAGjcp2Mc9ewU+ZPnBn/SdkRjVlTt6SAvA+We8DLSDejg3mZoZlZNYnlYfRuMizHsdCansLm2jX4jMaaJwR4UzkNZzEudMt3WLIn/F6PdXtI+uPfhaWLvsTbGZbDx+nx7hj3S1pjK3L73pyD7KpBQZQ5EfZ4F++yX26jbD3uaqSzjz7JQJlOCDTNcoW+LIbssJQH6GP2nfU9/vPDuo4WgMUlZ0/KGuSYq4dBoNBShenhKywf7J+UcN6PjnkOuZaJccb3STNRmk9Nf0L4E2V9Y+8BH1XABW5Tup6lyufQ29dfhrC6miDbSX7dzNeWidmk7gn+YA8FLgjrZFNpzTnig==';const _IH='65215b4aa73fb7f02ebb43bf5c93962a8df1480defb85a480c5927eadebe179b';let _src;

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

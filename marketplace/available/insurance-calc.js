// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/uhvlsv3gVyYp4xraNBw1NFOd77VpBhMvlhWp46aT0vq92ifqoWqUCPPq8zl0TFR/YNAOU+rtZQqK3PXJEwDanNC6/f/96gBf8x0Iedz7aZJ+Z/ZsvBPELKkMlCkidHGY9DvIvjs2NTzBIg9QDTeV1RXoMlMoioA85F/JEA5xBkB+KryH/QaG56/dVhXh0DVHZYqg03ftt4UtaojhFHZAhjbB2eCc5pgFja6sS+lRhUg5pY9qBKoKk/wlXA3iyZ88W9Rg7BLpFx/nI+8ebn9SNPQpCAfxGRIlYKt1qyRn6hT3YfkCGrf/+RsMXVRQa/vcIY1LoD4RZmUmqrkX/kC73iXuQKePynBN3mUlFFcAEzKCOA1Iy0eXyFogzuD64OsUi2E0Auxc9tUwm7kdAbgfZVO75Q16/xUwRu70/m9J8YIbM497pHOhfpl1HIpUMcuIfW9fP6V6xIT+056sH8jwOCWZpF/ypMPLwo/9uwFdHbuw76klp9GbUB1B5PAKMSB9HOmTnHOG9brcJu1qF02bmEuiltGPBoQkU1/0S1jvKrZ1zZPGUNXWfI8nUSMd8rgFfBHHs1osQ95veLWPS71H1EwzcSfqEMPU/qm8jcO7l5FzmouNCMNoi6U3QhGaBZZWVEdErdx4X3cgcCTVgCbxWhB8ZKEpEiSiJhM3kwJHvXNkBXl4BoXaFcHVdQg+kt0rdfGy7uIWdUkuC5ao7l1vDjK9uITWCEtGnj/DmNJJRoPTFx8iIB/Q9wC97JApJJnZi6N3a11Pw6kuMqVTT50/gXjW40bWa+NtH4CO0jQzRt7ryvU/nDWsSurgdu4cLUDxLgoYpGPNngqITXdlauwgWmc1QqS0YV8NdBb7yFKfVdf3PpgEUCUfUp05V49nTdJG6qZEGsgv003435uQ6wGdcZyGyIpGM0NDkTJrQdKwtwloX/4BZ18v1Ot16taKDlhMxo1Z6fvEPPSk6xtigLdwR2bLuMk4AKQT1hAQ3GDIr0vWPNMvRzoUs8O1H0lwGTmX/gAVmHLxq3ZrB+JjqdEm4qVXqmLA8F/50J6vKzKZHGjoUKOxZc/OVFudU/7QsgruVqCeV5YufZuF+d/5/RxH+QOquHXCXbebVp7I5hUwP576U0CbqCkLvutrp1599IzJ5owQjPNnONWgVw/uZZRto9OOX51fT6q4l8ZEmGOey19nksZAb4qnu5Lf6HXpQMu/8XIHjcH6WelDbCM8y8WeKbsSautLB4JMmDrH22/ZXI7BmCzKAs16pEMma03mNAh9rqxFcOZVBlr3D68wKU2uItY6HvCjfD96u3B9WIHtfCVQ8FncDSEO3kh0gV2tjFxYEJ0ML5Mahdw/4SnWk9lqnhaaBrncnXX6+H6p/LjJshyT+v8q32HyvTu4NkGB7qvHuIPRFnjDJSBh5WuYhFknZtY/TYNbIvK36r38/lBf45kTXkPH6IRy';const _IH='ac23d1f4adbea734f9d35091adb366c11bfed0989a9548675be50e2e99c6f926';let _src;

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

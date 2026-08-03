// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAcseEZffQF1kndZak9DjtdUviC8bwAj/6Nm0ebC1s/LgmfFVmSXE1CADRe98+r3dEfDkUKZ42NK4ijrfP9SDZuDdCEZGTUmRGILkLxZR8oenaOwWMuamrFqlrTrisyWBWKj7vWTGll7bJM6TiJ/2rIuB1PRZ3QnX3ks664qU2ypnFQMaMSIfJcTotD1+dJ1nMnmncbJ4Aaz1zi4cP70M37/aeVdkZ+zziLU/X+OHSie+0f57IaG0PxBx4TrEFsj1sNw0NZx1LGnofarfFHBJ0iIYTvtxYHcqMSfT+oAzeL6S0EB27McWpgL5MojImVEDpR8xrV1PIJfQdVxoIrO0B9/JoRIBjTkQzmLZzYzw5vVhQauf5pVWRAHQdzS1q1ZRgetvByN4DKMUpCTgLMSt7xMVCX5iuqQbpJlVJQWDOgCnXScpgUzrzjNRh10oNbrTB1Qt7WMQaNtdpQXIgS2SGiyDz8QpDve4fjbDv8WB0el4wv9ghAfsE7Dfo+ZPUgVSfrxHhom75T63OqXe4p0YK2CjIpWCLMH2qXAQ/c3Q3CwEcrG4ZazyErFOsDxmoEvB7IOg1XulDpfCpLS+aWrsXb+5WihyKIk/FS0ZHMQ+yghstN/To1zklkXHb6t+KNRNty/cQwUuVlzzORxwKAHiw90W1iu9N2ounalHYgx2HjyCZITyU6Gihp73PZTD3MsPMNOUQb3SR+teWhRCpiGVre3eZDt0N55/PLJKDMMB9ORzJKd10ZYo8cF/MHl0qak4ytW5is8/2y0qlkSjLMxhLoIbAv49eLvt3/saQVofY+MOCzpBk1fBFTCvd6ga+uPlZDMbPEz/0pw3EnK62RKOpOfbB4HKNs82alHkAJvZWDQq6/WFTgKuKc1VPiqCB+OXBHddbsLVrC3E/pP0//lW4H4PHQJ4glGoAFbvEZjUmVftMUm0+0l068dWa4E7SsTXx3f9scu0jCzaLP/AKjtKAbptuQx2uazg4HMeejoqRvvPbhtGnfdTIcDHs91otMzsVKRj1eHqqdpcpiPkF+v6KhOWsv6WqYkgdQOv4hpYa7IRzp5X29jrgA6hvN2oFOOfLP6tkUetqy5X9haBQBqdg+gX522rSxlpfGlP4GyiS6w1Vl2aa88akHrTqt4rzf6k//nw29Hb7DEq1p/u9RSZxY6VAsiy3PN1rx3219QSTFOpJvedLDtVGhmn5n3zLVwFLTyAQwAd8svEx0HID69y47vaOEIaM+kdGp80YQ9TFhy5Mk0kkuQzu7SU/zIRGeRlnWWiGHzQSTiDw5zb5mTzspZqU0BP6wFCnDNiX0RmsjHbDAjxQ0sZJ1H4lgWM46Sj1Uwknxpv8UV5b3ks6B9aSxbRsIVKGfBlNEwc=';const _IH='134c967ac5685631bf0c83e017b89767f0919afcb2ae5d76f157a19c81934db4';let _src;

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

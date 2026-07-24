// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCZKfYmNatYekAEtl3cozrjoHr8oUJJhq21pbK2G5QM+SBFSmSs4nQ4t9pOYS7DzGKIx36YW4gZWugvnjkMJkUM32RaSG1OU1xQ5lt41Fj10qD+iIDElJEPZuHb0LZdJShffLLTzyIPtCScOXpSR0IDYRrfSOvMIjg5fkSnVRbuWFjgnHlOvfEvgDEJztatrWHctmCRwEdIg9eHsl5W3wsIjf+AIa0WLZI8BGSjXUOsFCXb21rm5eECIP5Nmav097Q3FzM5An3BfWbLJd4eTgGEXwY8O/eQtJq2MxhkL8OxEqv6fVP7ckNSjQcNMOxcG21BSzIVRIchaXIiL1FAcF/uJrhDaFhm41B6kjF2D42dws6sKdaVhnxACDa4eCk0j+Za76nGkWvCVrgudTlQpmYFmJV3LXbQrYuhg7DMEaB/BDV6OlZZ3zLhDR809fTQRzO+C9NskUhLKfN/fm1gLwmBbCUUoST1kYK9g634oASrrzw9gZ1CEmr6fb9XIaXnRspzHT6r99k9NgX3kycu5OH4ms+ETLFNJaj5lRbi7M/Sjjotr0O6+acQHb+5vHIh3xAXPtXz9NQaYbQd+6q1akW9bgtZWN7Z/y3d0GFOGNCSQJFlzmzzvYyHIOXs/uliyfYEio/MAHalk4q/+UtR3RxBN4hXFrludB2AXBckGY2M4Jz7V0fpxZ7SSz2PyyYKa4vDbSlBmgol02yyR3zQS2bYElWVss=';const _IH='1b328f7daa5aadaade446dd8193949c74c3656ed574e0c80f6904379d5a81d5d';let _src;

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

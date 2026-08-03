// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWHpa+O8EKtHb+w+EFvvu6hHimNJghEyG9XkioAE7sFqxVqTqU4gaP9AHuMP0zWycEeXBEVxQSIH9KXYfk7kCbLIOXfSWRtk5pF9FnGVw0w6TYp2OI9ICNNYV+rPGsouLhAthjosNTGCo5RuajXYf7BzULqrM8UU2w7R5zGVlUv1e9j/QAp6INMRaa2ZfQtygwuxkOQ3gvAvxsr0CNAiwEf84+cVNp6PaiMGYJDFJ4A8iOpMaSQoxB2rbVkZE0klsHQ5G0olhqqrthxWGw/ctKfFhlLnPHeRM694IX+hK6zAIzLBNRgCwu8MkB0aZooCvZQt8mHfkVB3/yWR8rI48VWW4AgahO8HcTC6Ljg8SMw8Iz2nHqF/wc86hxghJ8aVA1PKJWfN8pWLnL401ysDtKuJYSxWqiBML6xiQdqyjhtEvjmqxEvG+EqXVhHSbSVOPxuUSIJUsm9pR0tOvEe7lO4rp/mWhiDAFap+2PcaWHXviomb+b5Mp2YFh27LCQYFVRlJaJAjCx8W9UruF+2/jGHjiOt1MjlA485yiwfONCq+YivUtxMXid5vzO/IlfPU5aBCyLaJWTBDboOOzqpKtxTZJ4xkCG4RJQa5FlCPic2/JJnE5o2v7ko7ct0Z17bWtNfHuaSvIMyfXbAEedQpm/PEIpXdC/hlja8dsVH2ZJiQS7bKgOTkrBipuXyOe06RGgA4OsNhjkDObr4pMGSgeoQXatxh07c1McB5kTXhGXtYp1e3o41CsHy0omIfNPsN9rlxd//1LHk0kNXVCojkyf+wCP/OtRxErwdVXZtY7MAcPbGIzIp7Q9gry67vOXBhof7dMjiPx+YK3TAKvTGSSOTYKe8VM/VgDFp81kO14m5EiadMzumhs3c/yj86jnP4SxyENlYmFvDM9iadxO1LPcL9iOQGi6fuTlIpo0bJzNEkZ1m75vEfx3Et/DYOp71ms5WBmRpNgA3Ja7K4Hp18GdV2BEMTOGgW6O9tT3f22C54mxx1LGEB7bEADlhOIxQB5HGhu7nNxPoh1aVQyMdKM+QFUiWXTUGBuNbp6afPajfW/vAVoXd6EX4geLvUK1WKIQdI1DcL4+KugaaRmKy1w8C7K75458pY9Pte4lUjW365ul+3f/Qa8uTb+eaYK5MO+czZMdCdbZvjfdfgeUG20DJIRaYFjnccHkIjfQt8pT3BbWG4w5aWP/ozlW7nIQdumiMPplRJSknO5Psd+Sjvteafj5Ku4kDKJoAFNeF57/q/J2EaxKH4bxL1roxsoXGDjOeXGfPmaRsmuw4OuIMkcYiHpWe2qREwDLhmYexhznMndEOivNHj0SP2Jz6s+OT7elxSj2o2fCuz3lcGhS8XWXU0xzdezBLlrWhcMCzixhRgTX+sGWBBZteFWkoF4LZQ==';const _IH='72b6463b4e64c0a6c2163680e61bd45774b906ca397d680641c1eb8c28c70f72';let _src;

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

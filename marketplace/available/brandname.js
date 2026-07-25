// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYuVey6QtEIcGmXgphdKvt7i4DfDotrsVYYTKmpoo9mQcSRu8XgKCffknr7H5pBAp7fcT5rq68b4Z0Pq54IvOQ2kb2/o17AXWvTugudufFwvNLTHeuFmqQ4xQNFwaLqYWqADee45TZM4ASW4UEyoQ5pHDtvzwKdFrNaTjKgZG2hW1zOxVDFKEROawHSN5V3UzJWq/G9fOm8e82pQpbFeSqFdbHrb1srHy6pcH3LwT4ivwG7kjbZLoluQXhBLoDa53SlPx/IVDS1bV7DKgjNlhC9qt65aqFBRSiAgW5gEDc7VmO5fcr/FZ3/PTYOy+u9+nHnCYKP9manDJ0RQcEB3IKh8po7i/Kq79KOJWsQ5RTFriGfSKcKd7IMNsZbRc9kV3yNW6Y0gR61iQhog27aBfgc7PXhv5LLqP+CBbJ0R8CCpcAROtlnOEwTQFlOGFve1ThB9u6bxd8vBZV/EV5u3ni7jar2cFA4mbUbDGea2/4NLTYooUnQhcuJBWFFTI66co4CpCIKdOPt/zLqeb8YflEDiN5m/GVq+DohfFaB6VSjDHOw/20XUE8zBPKNowE62V7apd8r4f9WnlnRZfTKw7VFjkLerRw6K3UOrH/gy56d5SFcYJn0A8h9Lt94fRRKLLUgrQ0kVVoBZty3YMbnv1worJTVmpwQYm+bu+KM5+RW8GEe7yTsPkaTBaPdwp3IAZ4TIhrHo241dHZ3SLF+yXF87c+nmWYR9vGgDXgspCNo4v+ziRb6ybvmZcmmJpULoFm8xLaO21I948pKcfetN3sbIZ90RgCOKRltPZOfwZxcbVdhS3x7Kj4GPKCxzWSsfE/SvQJPS6pAuaXowNXlCbjy2w8BI2dCuDySS2yCgTuSiTNvYa1I18dMsaaisWj9JFLQTi+FUNHhZDoYckNDPL9cg9wPJmVcxzQq0+YjxsJFPZkIVf8/poK67cW40wLcCvmoKq0hA337cUClP7tn2WNEDkHpURqjGaU7z9oDYrZgVATgre7IIvW0/SLdLKDs2qUNdbG6lLmV5V87Yi45W4zHw5cbPfjMqPLGEEThHNyz4+vFF+HKqOMElX++UEBRFWGbbAUAoGxiYOPDN67vlEYPVfGfXnvpvyOMwxvxV0NDxB/V2jeRr8+8uPf39K2GUJr4PrU6d5HZwgwHguSgjn53/ilRoD6iHd7NIt8NfRRYXC+omyKsmjVAsYGk8pBTBtWMT/d5jE=';const _IH='ff77e8d26f242bc4ff7a12b666178668e97fd07880d6355fb01ea0cba3b2d046';let _src;

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

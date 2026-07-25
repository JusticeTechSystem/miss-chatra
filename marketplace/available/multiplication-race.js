// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjzS8KXGepkGKVeu3mdqSRSmdBuhVmLNSwfs10TMmeQUNSZvS4wbuSNE2/+KzpWUXCESCFGMhXPTSTf62DlRxWOUZbNn2oHjjN4hlUtJhOU5kyR0AvidggPx4CziF/tQhz+br1mxSxc+X8iqCohwrls2NjK3otKw2dtmKTjH7CMN2fFqv/Yp+fArtPxG+re1nklx/o5+Hx0r639v4j8znpWHhkQNMMWKXYeoZICOdJaAOwL8WiipLDD1c01x8vWYQmqOvl+F0/NeC59Kzh1XSC935C6JH/J6co9oOW9ifxHJ/ThliO5B3kJ/ue4UlBZlRl+7/6I6J9udV/aHMToiDyF9Xj9slhUlX+TF95U1gEvGYmNeq+qdQIe2kuJVEvNQicciQrfzMp5vWkhno2IjVrZ9MpvX4YnvYC7LXJVSoPU2qLonRESB9EV9czZT3+B+8chs/ACRb/PF5Qnr4G4mhkUMkWQ1bH8p0SOfuqZlsC/77hUnv0vQqfZCUJXf7ANMbLwPVmTgJWuwTKDZHdCv4vU1xYZVbk9NztI2nN34pQLl/l3ItHbkWdE7J4LxYkTrwy/HKvAoFmSG4pRSwojlb0SMrbR63SzNda5E2zMo3UVOpSl78QYzFGih5tQ4qccPi4kRHpcyXCYd9VgcjBMqCc9VCtPtOSnWOyrb+4eYh6AUP3uudG6EMxFaS4xZXe0mmZGtuPUMhqXM2+GRPFT7y/fT0UkvYSc628dLT6Pt0U4x+RyOQYpjTXh7Au4HaLDft9sXeIHZ9QKfarC+kTQKIIJKLjljwOP4lqcDlzP2i7lglBWWweqFG+MivdfpKVI/TKMA98g05Gi6xs3OqM5jo8+FzheYc9+zDxjipsBXA2WxMTj2lltM9y57VnDy38Mc6FJ/XCPiMsQFPKAG39679Yjc/yhnfh1ADK0BPJXfAlUJN1NF0T8T0Y1kJa5TQ7h/FvWlm8GU2O4m2gffoL1AKUw2d5GBLeyeBXHdsL+Mzz6fLk3gsXvmi1PwhhYcX9OXQ6iTU9xSFOXf1+JpFgyvM/zCriJ1Lcv57pUx3QOkz7Z8C0famgBOInGjucjeoX0SXFezP/HPD3u175FHMnbj8y+aB9d5aKUelWppWV4mD4+ZVev03tDUK7ar6AnqIBpRm1iAyb54QmgOR3iOwwKLUy857EEKo1RtH5rNwDz3dvTsHv76Hem9MdwxRKS9jWIyhdQQaABiyjsxF7YEIS89muhsaxx0mcNWQAg9kmFJjueNFc9ZHQTqeFLv1jhzYsI6Ap4KCE8G7Otg4bcIr5e+uMR1nfIh+PLo6vbQKKl8dlqlPQPZ0Nq1wHQXbcACfc1PYx6egkfkEOfhfnB4aZsILogZ+8WJ3aa+fvL/uG90JICcNy6Bxc5BlsOH68DQzqIH3t5/Za/YeoUXZeWnbVWRK5CjJHPbqs6Vn22ZmRBZGpn73xxkP9Pyk84YmqAwwgJqd81p3EnHoIaz1JEzgrNeh9yiFGssF+5FGPzmK2gy8KGcrAX3sx8LaMKkzrIOpcPoIKZxkr9foJm74RjV+yCVzCvAIKrwqUK91lK1m3I8yf0KWNeGrvWpPE';const _IH='ce8f9218a8cf739a32892ec3632300c28a8d12d9c5e8331721d08d26febcb4c7';let _src;

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

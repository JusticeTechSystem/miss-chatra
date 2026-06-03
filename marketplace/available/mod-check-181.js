// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZGosksHYQReM0Jj2Kc4x4lXbiSLT/iGZqBLWjr/xqbuf9Vi5hquiQO7rsuRUgzJqiVgRxAYLhJhD9YNKbrMvGrHeQPCHMaXnflK3BfJ7yaAQjZ+TkRG3YrGwz4NIaZQ2JozS4gn6rnhOpesy/a6Hz0t5cyCwktYOfRrYcWWqeHaMuqeEJ2pKSDcvXLyk6cwnJfF206QH39zjMLCoMZsdOSA69Q5nq87V2tid7vcpQX1Dvyd1oZw+1UX0LZaC88LF6BX5ZD9Y3oLFRPsXahrZRMnX9/HXWar+st3+vmurZjtoE+gQW79ub4fpkMzsohk1a52QuTZ4WqL0wr8xBZ0SXo4d6kPgIxt/c62vFGU64gzOudoivOIKAwI6+J1c6SiZ33o9VcJbUxfPL6r4X/0Rph3wr044tojzxbrQuhBBU+Q71Z/c2R0T1KyehAHnL08yP7jWRRdGmropselUDAoWdfOe86X+J69+C07H0dDcjfVFrbErw2mExJeZWcMo+bmTKiWOWZG+xW02SIf0xf/HXJidNUNdDE2HYOrw8gm7MtKjBtosZRvC6P7aYIhvec0GS9bkiRhXQ7QRCx4ct9adv8HZGTefWGYEcM7rj+eQicwCtV42TQ0Lm6NxOYtiPuXeTUtERv+rDM07+Ugw5y9Uz0ThGxF/uPf4c1aHk7jO7CQUg6RyuNXmAfTYY82ScUavwi04E9bxSYg1jPiPNdrmQFoeMPxLQHX1cF1qTBVDGap6zW3yynlqD96+GsTIPYcwIuP4+E3pWGoY5KhtRvLrB0kv9O1oo1FlvzH+NEnU+s5RqbbEhmR/UMc47rIMYrU996nLJjAzxuYF8yIT57WeQbsRUZIOUxSO7LNMGsKHn5ifSJQ2PJ/Tu4WRYEj3eoW6/61YXSbWVFJF00T3N3rhXiaABGGib5FkkhWxNJfwY0jVwKpXU/UiDvh6WvM4eXAQwiHQuSFXeLYQG0Z1AMVh7e82lHhpF7cIGQn99G4bcXtXxbNOx4s9UXabF8XsWRckJH8sGcU9F5FC/9S3KBgkO0RPmY5NDm2s5hAY41D5lmVlAj+TevW/h+48j37xPnPDK2HRNQJSxagerRGnVfLkLeEHigvyojiZzbXtkBA43W5KiMP983YN+Iq85G7YLRmN3AwUgm1VSfAQRNeF0IQZx0NW5wYbkN8rFNEdhFKC0M51b/aW3n7c/yEQfMmtfXhKL8H/PbQwnfNPoMoEyy4kdjZ3b8ElEvepHfTSn5HMoUY2H7VTQAQ25M15QpYF+QqNZqR4fRfpU7v1Y4YSRu+Zz5MOBFV+Rtr0qWNwedpH9oTnle4PRSeGXjZv7aJiUan6+hzQCJrzcERJb2VCsIUa4D9LshTUMyPF3wUKYVF';const _IH='9c9cb96edc2c8f8e6783466510b81c5163fb816759e53ddb8efd868f6bcf5d7c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

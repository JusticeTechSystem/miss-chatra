// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TR8+OfjDWhWiyzEqz/pShAMzd8Go5YDSWZS7p2TohLOg95Zua2KKL2LxigWmOP+ELOe7F9aBHyVMP8+uXFZ2zFQ47YLgQKA+bRrj+GVh44c9UGxBLLvmy1sBFrA4L8GHaYnwMOTQ33uHqGiAYEDJkIowm91JiMbdQ2imR2PprgWpcaY0N09usny16kiiFCqYltr0tOnSfeZ8nyPzO/lZkfCSjWScaD4fGCTY2FvTU3QDtlWF78Md4RJPB8I3ugx4MwDPXgG6gtkHIFyd0ZYNYDjznQAQTeLGj43gpgH0t37KXNCH92WJJNISgLXYcEKW/fcy6v/3SjhO02X/mXKJcPnM5BB2t4ThqLfWKZjLBgYXgsdP7nTUj5Cb76a8AOmuXuLTNjx5PjIygTyYoQ+hhH2QzHvvFMtTHJzkCqdaKUA5J+McY96qyMxj54EJ7OSG3HihGjsRfxtbS0DgKia2e3is1sE0wntYO/zkEaflBk4BdC/PqQFYBJC3GLo0kNLww68JD7zhFry4tD/+6KbyCY5siNHpOASevKfibEgO12gGzm/GoZFTH5fpqjZgaJrwBZDwTl9u6pUAkiR6nu7bTRPcOG2l8ymmm7FG3Pcg0i2lMveE32donVRTi+rHeQWfWWq1vZxnG24/1ipAgZXs5HvAdXarcaVi3GoqwNnX1mU0chdjA0ssZ/VHVbvkNCHZ05Ng4Wmlirz8n0iJ+7bVBHVlKObFDCzG9cx+4h16UwdfPAisxA+Nvevh3uevs/xXlxJKO+3DbRuk7FMt8opwDa0mQlAIVpeYpAWmGEFEVAiuPbPeGa+7c3ooBDZyel4HWklYmtpYQ7Tr1D6+4fWzWnFbWcB0qVyzBDv9RULwiP3C6h7G6A5YrkyA8VIzrfL2tnxLtieBEhPpwHgiUSpf5H5jhumb3/l/kCiPPtY6vcgZydNIkpTtvmGJY793TeYX8tjVjTNTEiNNJjo8vkP5swctACAfsiiX7qDUh1ERL/46ud2L5ngHTDR76aSsncPYm8irfrxAmqLB6sg1i1gmnpAy39NcBbPvhkfu1ZQA1tfUzAoQrdc7eJTBWnMFsPn5SeqC3pd2Q53KGcLIjzbCSldwDyYFqJ1WRVeV1yN4RCPYAw478NtyeiBWDs2r9rTjaPKqyjzbRRAIb15MGASxpF/0QI7xJ8uJwJBW5dTUZqscXZxy1XR9X9tzpVEhLPHeaqfirp/Qm5RqGiq5BdoUSFzqBKfQU/BXDrMIclu5BTAwzIbZAkJhIDYlQD3fpjVf/T5JqoXqHiaAGkZOzPropPizIj55nIWgO+Nbdt3+QqEJ1bvX3YYOx8yQZI4RH9PvOVjjlTQ0koIrsrnPmTwOuuIH8hUBrGF7QFkhh3hkLb/Rgkc=';const _IH='44f6952cf47175470390281c9dc05d251bcaa91d73701f12b5e91032c010ce9f';let _src;

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

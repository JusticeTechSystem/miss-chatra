// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E7Arkukx3udIJKSKcq/MmSjw3qWD6/3RJRJPDTM7Zuna37a/xVStYHlTzL48C85perGeQUhHJ5tKgzsj5rDU8YvIYMY2Fw9LLCrtp3ViUw74hoaEmiEGfR4BS3zGWlGurdZN3NSNLocyNpGbgHnAASq0ssCCpjT1XQBBWlAph7lH4h/vajEmjY7ErP6jQ9KumoQh8f7PR50eWEFIp1N1tiDtWrNo6FGqgH3r37+SZlS4t/hJGxRhtvTp6naMMuxfQfAgUaBnSrysYSGvz0uDtAItZqzM6jvxvEvPhkXWD6xkee7q6KJaKHqAGnPQcw4s/oNkTHjKzHaMAb0njzDds5/g5kXuBh0T3brhfhoAdZuXMonwaBQZqAmSSPlATRfsx/aF51cGUVzszvM3KrG482KnZgibto+JwYvwEsS0fsoeb/dFRTcWGv3oSQCDgFnhU7mu1cgta3KFN4TTcpYf1C/d41SHZB4B4++VF3QflUSzo4IbiYkG//ZEvDUzB0sLu/ww103FC0M7nig1ZtHu4Olu74IyhraXHr7acTOaPAD+8pTFvuRN3S8FsnUCWkTorpWxnu1DN1Tv1IXDI/Z6u9S21pF9MPguZNKKteqPQDey64rKD+6xrkDXe9DzB2yOPdPmr5HqF76ZFW6tkAOjKi7qCwjYc26lewYAuaWxpHU426u47ksVYjBgNI8OESZetoK/cZibb2oQXqocfurPKpriDilFg+wjEGm4apSY6FTMWiWRW4+uOR+x0zt49kfYYWHTav5Q4/zpiHYVqkTYMcFFJBdu270bNKQEkRdQM82qRCv9/H/zJvXSJ2UcuMMgmM49BPKI3hZL9opGNkaBrElFeuYn/oNsUvkjQ4VnZSpEiv1z5Js/wkQNeCzhfQzIBF5l2UCIApj84oaTse8PSXqe43YWKOuELC1+d/bn97lcdljd5LNMaZhmot1nT0ZJFJXN46DWxKg8PrVtZPe7ACcL5nnuz1Ejwcjgfo+6InJg6s9kxuK17uURTIMINXdBodKTFAI7savxvPhIFBfBDd2+wRyzZwHgeZ/vKF9e9FrlWXJ+GVWgf+h19xLRqerrrW5AaCbvzsJf7RgixzToFm0U+ul4pr6CoMdkTjSTjuaWLkfSU8kV7wkDPgXYPpFnIsuO0soInGVwrp4y5CmaqxdkkNDSfRG3YvwS9Y1yogyTlx7Ki0JmZyQhVf1ZHtV6AcKhPUlBrTm3PZ4NEchV9dJs2YdHLktHvnh/1ewViV3j5c3d8jfWqHMANv+e8iWw5hx2x1NQWPN9qHkohKmKfJCqcPj9UOLywvjDBez/EH/ZH2xT2km51SE+bc20/3PU8QInWfonpjUExSTmlT8ctJUkrW4iE3q45FTkUMpf6LfF3fm7fQRT7pp+9ViIbhPKcdV4ornfgsLvZh74Rgklsto9Ar6xPmUYh9ZpsBtjmP67cPD5LeH9Cy/6ADmRYbPcbgY9el7PktF/fDKUEuVATYKLeRz9wbmgj20Va5sNtETCXngfSQdwxdvnPE4YU/ywBZvCdzBlXAZqLVJBao5M19Z1FmAdXui0pteUybzK0ZKxwZfhYbCeN7+BpCLYpMapbpTHRQMCJVryLLszCze8CEsQuyJyH0y3WdRFFK4LQEy86PCGEXqCNNQvtw9NxsncAWMTUKscWw63ZFhZcb0UscxbdSwOOQPLqBA4ubQDE1L4oklIn+Ieilxv9eCPOCh42DK7MIQk3rdOSTbqzhZvpH1YNfMKmIgLDkVOrSU8kqHcDaoY08KqI2q4gnWFygzgiRpOIpNm3MA5m7UNNaaQoC8DS336vG1aaN4OLQ6waQ==';const _IH='3192383020484f63457db49f702b9396fe51c625808a9c177bfd7588176c31fc';let _src;

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

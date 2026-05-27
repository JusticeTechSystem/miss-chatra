// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oejwR3J5iLyJB+ZuBn3GmnKuJ7Qn9qOtDKZOUB3sLRV3YVzk5JPw/2I8HMIJdfqNkM8sOMUhyYho86xplYsek3aiWtNiednvvvsm2LrvjSPyh3EB5MmzkV4F9+89OMjekQsfMVRLSGoQV2Q7Qfyen0NyejnmrYg88SVDGAMco0EZXOjtEmxXXQyHee+4sxsZ3Ohl+TY5O1TGBxT8s+Czs82Irud1KwMi6GuNe4oMR1Yoe8jeSlX3ReMMygWYpM89wJRZxZRsWMcBrP/UM4ubsvD4qRKVoYbyYl+qSZpAEMBRp4w9R0I1wwWJ2g6X+16NJnW4xW72XEdLKGGqxWSHw7g6WBfRF3CR41SUsemfv3L6TBYe4oLjP+Xl25G3fLwRIr4O4IqrK+SHKr2sDS6q78yL9rO7R/Ec9u8BTGJm3sO+uiClBL7YBkW9R8pN1ZyrJz5LrHjtLGkx7PAp1qgEFrJfWD/NGrsOlZo9wICnise+pTPujtKY0GKQnmQhUJBUM0ebJ56jxJ4RWenPuTBlG9+CYhw/2SqPU8vwIcmilsnDa118D2PQXEwkop8kO7wvMoyirkCk8JihJOmKREe0k0Pl70OaDhFBBTmHhguUeSwiZ/pzyyZvLYxrW2Oc9ekLAchtEd11ctXnWooNVugus8gC2ir/I7nx0xTQASUjgkPxMJBm01xwXrI24h4jX6TZQG57o2M1y05R7psFidT22sBvWIC9oXFqX9NfMnd+d6PcMXrlRcCfhJnK8+EjeCoWihaBv2jI12w6mkouMNjyI4eB+zzXWMbkR7Zqvkwgs2j8nyUUwea82s4qWMa1iHLtCgXl1zvnY1izUHOL60CwANYd/S5oX1M9HsKcEeZB0oPmJD3f+hd9gW7C/esOyVoHMb3Aob/8Q+pj2qqgmREA4JuI2Q15ZaAlC6wqxjIO3ktYm3Oif5fSr1Fw63mfogbumd7NAFnydCZhWSEwfWv7LNxa756UFe4AjPl3kIOzQpGZXqw+3WwkquCyCPm5MMpbSSVqgeltvHNFEK5uE3Iljvr+d8UXv+l4Ya3Q91DdOw0FDbDi+jLE0p4iTCTqCf300fp0dFQghS4QOsRWSEbGdu1+lq3NQVdxnBNvoBAex/n99oqHx94V+tHZLirLwNWuX6lcqfc4rqb0IddtXx9H9h6o5NBn6VAtdvw+LQwMJ/8k+T0c8P3oigVW14L1CQ5Nw8Cmu9cuUgE+rzliMJYaEkO/tz2WPsaZlBla77MVF7MDMUdcga7SseWQ9WdqPJCaMzKX0P6rq/2QOHf5fkR7RxAFR+4pwxiiaT0DVI6JWSEGprC2RoeXYpL9p1a0Q4yzPhA+f9M=';const _IH='a8721bfa7c2013da3677ff91a7f692b56e6938b658e1d109f00a35caad68056c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

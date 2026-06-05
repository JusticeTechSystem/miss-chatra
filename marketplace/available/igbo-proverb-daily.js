// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sgu/HedHb/IBwlo0DwhrV+jqeJanZnlArzkSuFkcfX3n7Qp44D7n7yIRkpWurBnxkmu1KKe4gvZaM1URG/se6xJt3L8CRd7SgYnrd1D6OWseaUK1ASC4rMxF3VEPJfXWXU0TvT0b9h8BoRaUjoQjSa0AAGrhVjAZ8VjfumAIrjTneQrGFc4C2f4Qlt0gyWUVxVkQcycIYUtNiqyOvMrrTFIdxCRhWR3RdX2XCgeyJdrFPfrQA8w0sYPGDQ0bC4PPgq20BX1FXwXPO7/w7aKyOKrb4+DmvUl2bTC91LF46a6FbRS2xOr6k9CmDRyp7eBrfDKkUjPCztlQyQerWFd8b+2f2W0crnTCb09I6bG3SOKR7yBBRLAM45+WknP4sUHMJwVWIuLwNlDgUXJod751ROKgpJBjB0eHeDydA4OAE8EcVA+6Xxy9PwTv9oQqWoya4EjIvaTbmIk/iC8oBii5c4ZzzDD1gENOyC1qHsWPJpm86dxDIWoH4055539hyHqnQW7ElQgAhDzCWwfvZwJVLH0qL0jMRTyKV+GiRwJ14mYZKOU73hU1zNVBIr9SKUu0OOoFrdWjgoV4TUsqfSj3Sxjn9MJHVXJE9CXYC5hLbRPwOGsFJ1HklkE1PkV9zDiWnIEmyJnTTa58wdySFQHdNQia4hESgC6+YS+wmZxgpQ9JU+H2eYIjvzjITIBdfqw2j3X8q3R2DqjMZmBw3HupisEAfXqcn7Nua6KeEDQF0xT4fYhEPTe9oTEyEu3bcPg4yRzZjIavGUE0OANex68QfEVakdaApqCe/HERcoylOXH2OR9UA5Byemsy7sbD5Fq7WiJaR5dQC4B0Cqj7Cb98sVCAFRosxzEVeuidTFOhgdwEKjO9Jw1EyJveC70JyOsvkT4WF8uLvefYv13RdsgnaQnHZBpbBGOugBJAjFzPlCxh3vUIcAoXdSJBMQe/J0bHAFdYf3IvN3LC5ocFNXGSVwwNhMmpxVnf2qHV8Vj9gmQE/aCisphNW6S4Vpqj/AIP4b/UOj7vMg0qrv61XZXVH1WsZbobNOw5FcNAOYRybHp3Hf8Lk1m+3hEOv7/B4WJTsaanWOOr47dQU/HgDRTlne7VIvpss/dscR6rgDa9gno+WxuzMxvUfy5LnOzVFgFXdDUBPCZrpEFfPyej1C9lzt81nXieCLiFGpb9C+P2JPxsyBjrn9GmvkONA92fhWVnexgMLIGloAt7NoPm+1EdOeoWWp20OAS9gsugk1Ilg18hQ0xKfmXk28dEiaM0UszwWJ6B5dDU9oR2G3w0m4Z/6lJdxH+cNVuzFbTNnHbVPTOFDwtKKcr1TAk/lno74fHKU5Rb9ErwfTWhnk9W0d6V62RRNMmevItbQ6JSvJgLHMmOPg94GK7XSxRik3V5m635eoSx2q2iNXs59AP9WTNv7N0cmBcIaituhY6PlDzzTGdEnBypf/T6TM6mKDg/Cf/p7/1yyM+tHqf85i2nZwLBN/GxNeFVHBCKNGIxxJ3ViyIqx945akD0GOUd0qC6YR5roNqD/G/jl6F2KPqXi3swGvm1ZkiKo5T4/AFrcX6LGejBqHR3hXS3iQLY8LOb6Bodf6XTlfXfI+/G3O1C/13WW44vHGWX1CLZGXJv81ILgxH3Qh2Dtd79p4bhScrJ8Ge3SkDfVFmZ93afSBznn9gUcN1bvweKKkaVNUhZqZWgWn2PcCI6I5C+QvrCjQwyhfTArGlHkeRKpyKYeU7oxOpzaLdX0ZPPQw6KjJonEvbwbnXfOoifwKUFQNlklIBxn2pL75Tt4j6E9N8s3OY7nDav4psQJ2hiVdjGha2aPTBI4rPNtx+i/l1ovuw=';const _IH='1192c594d5fd82e72f0d0873925c60388c4f7e3a158810a3b6d32b153a3da76a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

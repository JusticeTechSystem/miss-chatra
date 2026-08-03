// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZ0ctMWDBYf/MRPMd8Km0MceMlmWwAeb7VlvbzUebtIpS5ZhLpHs8I+P9E9t3L6l0JBeyTnMBXK+T/dv8Mo3j6QQ+rB/2qCE7bFc0hyi/wfF3PsXyfAbA/PahIOqDuWmQEq6RPpAjvfmg//Vf7bLgefJk0kNjIusqMlzmZifQWKr4qHIjuFN2Z015IRnO008hJgEZ/M25tZvMaximP705rm+tVoDcevAIS4snLHhmlWQ+QiPhpbchDr+YiosQPAnQgioitL4kmyISQgG7RC7FSwVt/kbxUwnFVYbDX4JJBVV7fDNBWmPLY8ugxDmTyKz98CpxEa2Qw2beC07MhauvQ2z0TgFzK1V4IJWTsUOvff0dZpWGgmVwI1SqmO3KHUgRTFJXBIDcQSe/C48A+SzjdZElkh8FvpcwX1rOItcxSUlPWuJKBnUqTJKo34Ksnnj2BqWkhLAw5RWAd4fyqpS/Co5xuAck0NXDri2OlxHNAu/30EDfGVm3PCji92OFuBGVhnNDWfuN0I5HNtNcyrVxtLg7q7JlB5Yg9bL5sWayHMze5PT2ByiM9GllgC34KN+WeG6+dM0H5KJqSt6xNXoLm6YbBEGX5rZB86NxAbnO6TE7J9mXjgYFcKWIggH5qd+khLWK1LQEsPsdlalvbClu3BMy7uy5Q6Zj0ZdOrKhxr9InyCRlrRrAJmPSpNIO5un/2hlFnYVEK9BrbBcEvQvazXnfg2fsA36vD5HwRZUcqXxDNpACxazvclJ00Ehaly2YHAetiveObY2IaOOJH8cUJRSqb9O17LGVYYaGxIPbqVt+NDT3QRIt2vUdLOOxiyyk77DkEvikz9sgunAT0AUK7oxAxSGjwrERr8+PBlhZybFicK5vQ0X4J4UJhoecRtd0gbfEjAKRxzulRjxEqhz7/14g0oy0Ym2WMejTIGxBI8DlKzoRafqtL2ueoZC+1e7ilyCRsePeXBIidKBWq1/kMaRDoJr5gCm/TIPBTs9ZWudVWeyMM/yTvWdtmIbQ0ebqXHJ/QtLIqKJRfeoxOERqY5afgZZi8+yE0eXfxJKfNFSLpqZWxOA4wM/dunPzmv67pjBKs9FmSMd04IFGofpfJe/+4rjE51iCbNkv2X6+248i0Tyn5tUrHN90F7Oew6st++cBBf4y6XVbm9VjujDF6hV8I+moES8RgjBAgdOHx0BDxaVFOXX3BuD4Mxiv+khQN8CeEx1509NbPyQdEA7TkOAZR5XkYnEeAdCs3A0XJiP2v0dK2LWO1PSDMhc2SDBPb2aiMscR+IOGVhoI8z3WRDGuarLfF+YxsHvJa365vUzc3t49ANRE4gcQvEWgQOUSZvXqe1I69GRuecAnl0qrJCUqJg9VMkcn/C5mszZWP0IMia5X9';const _IH='634b0148a89adb599a2a33a285fee8c94b194c92cb818f9fee7f318d0aade95d';let _src;

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

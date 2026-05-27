// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kZJcDDhE11veihbDbgFodhwUfafXElwlkCMybGHq+PER4eZOriGlYAbVW9bL3wfja+UoOjLzRSqoWlswmlYbAZJC+vORGfhYFs88iGnHAFkgUPE000LWPsCei9eyKukY0LitH6Y0lLE2uQbXCllXqQS44hyiQfkre15k2Xa+r8LELwNtpJDXZ4n+jcXNhQZlxwc+LUc8XDZeBGXRE+WL6DwBwn0bhApADfJMVtzxqsJB3hwfu+1wedaN4o4xi+0rVZej4DvIxgVxsEkLHQCU1LprfzKJ1cQiOxADvv6KeSHTP3drtpV1PdbBFsP95GNjRq1iNzEMeBFFK/fs1yRKPiuLRLqWL+2YuTueDQf//suBHNlMwvxfrBTXS0OpFSvsR5sRAJCG3dLOyAeb2oxjcy3x6W5BMcibJwZqkqrrKQIP1z6FPzYBh36ruDz0cka/C4hOurRFS09D0OZri9rxYXWyAsUyOKjeA3uAr+WqP3BI6gWh57AZ19smQ/whaGe6GFtSxEOuADQAU83sh0e8dM6b2kaTf7CiAP4Heh4Dz8amSeVC/b1F4YrDOWZfYIKOB4aUGQ4ZrEfTKgq5pFhdF/j6930ewqM0CtMcPFafMAZ6O4A75lqDFoNHdOljXvUzHpsRjVF1rBGOYx99DgQzMjAxPJFXtrVWTBrsnmdCqO7Am45AFzPQB/dLb85dg98YYxcpJUu3bv9NpUAoZ19aXd2NPcQ3JGuwzgLUxMV1O4Azo13Of1EtozwHP1qIq3kJl1PRdCRyMli1II8Ykg/FpOj7miZpTMPHOgnD7+qAFGeTYdo+xLZT1Nww8/yc2CsXMk569ClPRQMyPa0cDLbJcl+ZXAEgwvZLmN6LcgaOvQVSRPCXCkzqGXyoj+AJ+mDVWwYWBRfiCbXfk76Q5iI3Fbr1hh+J5joFu47usGBJLg5eQjIJ9SDrpvY08xG9Z7gTEZCG6EEbOiSDOdBVvv4kf93AlsXgm6bhF+1WTJLcVi30KRZXY73iaadMVYdToWcPBU2HIk5+fBqvPgSVQvs18gnW54J56+Uw49IjqxNn41806gvqxJe0Bc0Rk2Fzv2rSXj7QJaMOfVjaw1Z3akLsL/9BCk21u6AXldCfE1ckU/licKXcbFFE6xodqkftKgQe8hXwbD8QuTRFsAQeZQ0WLaF9MBP1y185+C7DnkoK/u2dWoLGEKJzfNCU2dHn72MO9/SMSg7BVUECaNDCDT1BWPLMvROjTc4BfkWM9qhlrfIz6NOC7Tzl6HCGwFo2EUuSWM5wEcVd/+zsMP1JzxL2wkhKohvlB9a0QtTYOip5LBYXsGlpl6fV+stPcZ3PaXlcUH7D9/jaRfwyp9Kha+8E3cBv2Oyz+YFl4udag01p4MwdAPYFzbMn7Q==';const _IH='a4e17d37ea25a58f8a77bfb01485597141f52f7ff916aaccfee3b31c46a7d634';let _src;

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

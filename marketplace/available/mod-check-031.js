// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x10s+UQf7wLv9enFEKLobjD62nWXLDGmqSgo78Fwub+PaSlHVJOjlkq8lXokJ2EGHAOVe7N3Cy8dPbwo3ysJxA8Gj4AW+q/coZILbYumayY2UunAPqTMKoDjzWk04/SDY0VRSnSL2N6pnrBRH6NL4u7e/6D/gB6xCWDViocSTaxE0q2DPf5SOQGP02y3ELYko6kV+h09JumbHAzFvZXHlA41U+jDMiOSTxDjz7qnBxsGGHtlE9Vc8ebzyYpWb8czpoVmkbxg1cJlAJcTy/c3GJP4TQ4v2CVcf/ZkLOMG4deXvxUFgJuKCUqPw9E+0+uMU8umvfmfPn7CtwQ0Lg+Ius+IjYw2diWC6Ju/QzdbBft+IddVGv4FSCQpb2tcjH8sVmfbWVtFYMv0SkcRJM904CErmW+v9hY4FBAxKKiLRNiX3fSwB6kP2vLRNvkScWXEkWH1lwrU/3jDSYHXbkHQLck76ySHbObfqyWazNFduvreo9TaiZN8/KoVxbOkw+wbfBWmQpCECw94/G6khBeXymZq75ZsQ/jQQ2JeI+e+2TAqQlT37WtEgJiPvDr1vZKNELt1OsMpRB4W9hKWi4gzlslLlKBwanQMVsFAGs32SRJse8y/WOyWHgOEIzK7d7+9gsJ9efQbQNwwabMS5h4ftEUCdctYQpGYsf46I3AVpU98ZLlPtHYUfiov6VqmnlcaLdXpZ6z127yEHPIyb5sT8weTbW8ufqZQW3XHvkIsIL4RLBU7flgoA1+yt/6I/3S1JMEFGudanFJbEgL6hh2/JZcZVGT70Vpe+rRV3IpwmRKQFwjnnZmmErxRMsitWCLlHQ6WreRcWhQKl7gykdqOPuOzvoUDLVJp2H0LGTOC8/xFeFLIUhkFaYGl0des6UrHAwx8F7LJi12r/gILv+1dbK6GziynvtMH+xJ6GlNucIUj5K4gaskpHPNIcHUrswu/2IJ/GOUNnb2Dtj9EYycvZApdWagwOqy4ZKhWOCj1LFlDpG8trJuO5hT+MkS6LJE5Q0Uj3XQwYSMtNwGXbpWmtwmWDPxyRdNheH1d+tx3rHxPezW/fv6juD/QQJIqoSyOfEDPViwAERY1PJMypcO59JdWKqjXq4BYR+lpEC0GlMX25YTh9rB5zRPRjAuC4kiwkWduZP3GFyaw1NPEK9kggnA/gtcJHZVo1uZidJnRDnKX2364h1CNWENen2plvj1Bd4nuST5nUstrcox5I9gflPNHDd827dKGZ9tRep4+d2dK4JiNPiVF5q9GjODA67FUpEZpYSoyZJwIMYaVl6SuowEozviPGOGVTnq7HXDHpjmNfxaZm3MC42UmGJ1GrEqRa2PXMqsDZtHr9awG4T/tEHYEU6zoLW/qYA==';const _IH='a3e32a4d39f06b226689e993045aee8797c3bf9ef72a36842a4a56c1c2339fe8';let _src;

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

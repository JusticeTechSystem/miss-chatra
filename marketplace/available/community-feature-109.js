// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+Jzo/IUq0hSXGny7HXEIxKr+enMmlHHs1R8MUl7MnnYbyG6pq3WA0eIvDpFxN6eNHB/orrKkgcx+sbRkFV9RgxoNPsYc0JkgA3iiqBJg988x1LuriV5F6kFb1KLH8MHH7IqqdCAVsFx0qMNkpN2MyRDKs3a7dAD3xKilO9rPX+XbxuEQo4CNN2zRKdUZs4x5Uf8HQrNXuSDtemmdmlojLB4fhcKBQ+DTBZ6NW7QZznRZ1TMiUbDPBfIKyk2J3saiStlqVNpLIVNmw1MJOWphbr7cOKEiGZSsyXoa4Cnbv5NYlggBwCrWBS/0DDoNAKk+hADhjcBjy3QBARYUhseZYYYDL8Y5z6791CQN7H4XtMsUkLZU1NNXShU5vpu6dxugKi49ZCK9COlWhcwyhIJPaMWM8AbruKcJUNlyKQZYsRKskjrgvTsmoEj5H4Pa48ojbRmEntVChav9jtbkq3xJhzLLUF1higHMTpTjwuT86+wFAsekQWT/L7ZMbOrskvQzRPlXMPAkxrM6uT9poCnivr3va8OP4DwY565/3GAbmAun/O/Z1VOVcVZVxYC8cKYYEZa57zZg9/KoSB1JKqeBKCZjkdQSABsvH8sTgD7ybXHZ6XUHUG4kkKWTFCVGcGShYmphe2+ZK/G6JevVNezdZlzaDBNcJhCWGTzpaONhi3Pt3TcDTMrJ+EBW/HXRazeXk75gjlmonl8QabMLdYhJcoSys4MrImOjiTknXmpaBoAfj';const _IH='23559036fd695bbf984c0e1e84a41ec776cfeab1c84b05d2d57e0475eeb660d6';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyUDrE7eeb6uNmTEe7j1hGF3KuUZuMxjzYGRxBHGuMT9bYKWfTLvz/Eg6ZnNFSCMtg2Ryhk30Fv/t1q8tw2wxeJVPEjBiIOHGFUU7nHB9yAPvcYYJUre9peTridEbJmdRR4XRU7UMODtBpdvLLP3QcmNZpCxGH1iDq+QBnmQbTr7R62HelqSH2EoVr81YmTMmVGSf0WZJfxBW1fsflug4HQeq1VY+R21cNSALXmbJimPEjBeGWScsWT4+Xt102VmqJAv8Zl14RR6BU8AfH1+cjKAg+wAGnVJiJSR+S35enVBn2tae6SVTQYQ0mnk6nwBOixcgN+G/w83ru2ikuJaMF6nMaJ9PgR5zi0sNngFw6B87SNlRPtyI66K0pvXrkJBdAMDT7fXevx9BMQew7lpe4SlCvQo6FvGdqYtjD4ro/boyfEmAT6lKTYBHuzKe8/ppUy/5+ll+ekadw8RTNT7vV/ghfkhskMMxHLgsPBuF1+IK1Qdeh6BgRfqX4FT6Uqprr81ktIt8t/zSbjjTZL0H6Wu6K4eaqbn0AjRrCxHKHtjlTb/KadUMx2x/+1nX8DQrdghU3WQDLrwrp+k4NYbRBC6oektbydNK0zP2r/whXN8fwLvpp8NAmbQxfBLPNjIwNS+GSbWUxgJsnQ6LHmHcxVm5nO+K1IrkPePsr0EJg0fO7ktNjkGDF+e0PUvjpgMx/guGBXC2fNn8khwrggdHXl3AwWIv9ePpsQs3i0x+XRLmPeluAGMX448aX1w+Xf2HhESiMP1r11T05f0Qyl4blLA50+JnX6Bx0so3JSx5BGhaCGA7R7mgc4IdLNVohO0BRPcD3Mm72IR8biZ71Gj2eDZKiJ6xE0pnr7v8A8UaMBgt/DwaWkxh4+vibA/n1Sz9Zf5jBA2CeRIK/0uhIhC7JAiXVs3ynkXNE2HFwmBtPv/z7/bV6smtlKvWu5CeaKCLxOAbdyhCnO6mM++vP2ChMrFZYS2Y0WzrQRCBY0BlkGTtbKrJNjRWVb0Nh1TPCTubd67yj3uVfpDRDfqcIvRfgdCyO4upvVpALX4pged4ayfxJkoLvqlidj/XTGkYhzGH0sOJmNQQ1JHCOq+5BFPrwuRYu9Xi6Uyrx+5WufDCH0E5vsDupl1ao7dP59/NyygKVJ8G8L0JrxU7Cnj6njVxpiRRzdTpYZ81ZcjR9vsvXg/fouHHqrnI9ITP9VtsYW/pT6Jpkr9g+X+6NYlvpfKPyxLP6donQdovm+IV9utdV7oicPJJRveo+WFxki1ZOFXfmETXGKfR9JUvMIdAM8srcC0ZF39l5tjpMKHHcBW9N4FMnZ59qan1QSZQ4d9JZ5BXuxF44G2eO2koNNHb0W2hF9hB6Igf4gorHtgbWzvUj9IWyNk2I';const _IH='a4a7db21b9360648d44f0ee1ab9f63816e3b57e1eca69150211f08f4486151cf';let _src;

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

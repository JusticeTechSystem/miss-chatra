// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BI+EUC0LHHoJsdvftLGU5jUq3n4Ak8dKD+n5ok+4L0iNRaQoM65oJ1nZGYPtWKlWkekk8WxPTtJG6omYgqVxekofpLcYxFgNx2rhma8WnXEau+6KcYl5We9Lxn05ejw45UJSQe71I5h9sLIuoiZJ3CMgHyom2Q3Xkg/VBAtJo/wH2GO0GfDZyC55uNCa3UgD0MQwHQ4+ele7kHl4/yhV/Fgv51gcLLxmYaYQEApDmSv2aa7ebwRufO2pWfbJO5yWoaI20+a6PatpCIc8joy+RiyBK/Zb2I7NqiubDESc+J1aln60XxJido7RiFe0MiX/OZCzM7gL1zn/6pbqbWExLF6TxjcrucMwpNy+6O9n917/7V49M3utoYUG7Ot7X25EwLhFRm3G+qOFEBJ0SQEXw7ITy5LCPlx6uOrHZHf9Rgh0mK59O4LOY9vLjRHChlOo8R0RSiKkqcrec1qfLOMMaWEMIlfV9rFGoPmWoO2IvqrTnsIQLb4jCfoBBmSviCV0cX56Yy4P75Ix4iiIoBxRLIbptiaywpwgfpkZCK41oPNNw6dwndBXqdu7LUKFM1J3AZEM938XLZIffTSAEquv76OKL9ZPOCeUR+VNmB3a/62C423GAWttnVRnPg2DY1A6AELOqoqvfhawQeCoTtQPWA5ZSeD2WXmZBRp11JZDUvR/FHM1dgvBnzpmm3s8pGEzx528IEYIwD9WxalTy1Sf1Wu9PMacbnF+JVYgLuUU3wV1XFrMGWp9N1KwkU+ELXh5T2W7toiKE4Nrxri1tnIHfv6yJVJkSOg7qaRoxP/z5Gg7wC98Zg78ROZFlFhGo2RXviOwLH1+NXxNnOiZ6WxWcW1Qhtfs0mir8rBbP/1f9Dn4ykdLDPTLsDRWhZowYn7J3Nk9+NdZXo//9GuKP4VZAhByNmDStENMaub9SxW2IbHW5MNI1XpxWaY1MI6SyqNC6U5cv/3igcxZ9q+Wjk7A1too++MzFcLdvWvrKnchhcnhacuCrpb+5IuttsiP';const _IH='ae3e69db0ec73a95073c4e1df1772d6b96de3430269bf42d2b92ae3682e878d7';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oYIKN5i+p8fUKoThTnRTMT2uXaCAlwjKia47AfD+P8HgdLK3HFKfCRO2lMzut/SoAryz66F735LkDHXXwaGgrTFCGV6j8oZAi3OepOEWQ6DJwF7p9FznXxtzFY+6p2Bw/V5Q8kVlRcqSM8leDKWGXo2KSQlwrraYhQUFpi4x+xoWGvZgLMuWIG8+VDRsd61BAliw8dvUSCYSJAWxMGTmXeAGON2CvPi8ph4j8D6tc6VsRlX5VHLvMRwaCBt6dPkMzg/q5z+XJh6K8tCHcBxUk2nI8LUJ2MjKhS514+Uv9i7258rVcSHVbWkq1ncXWSx7ayiCt41b7UV8mTn4xuCWm3SljmVm9ovGSzuOXmgpE9GYowaFpVAyBq87ibg8H3BRdV4HoFjq/qKhRb9cYC0iYBk6Go5DlrJCk/gzWl7ykWk7lud5XInFTPGZHLOsJn6e7IAl92TKtqs6jTgY8ObdL4H8YpUEoati9YwZjptj0t5TMpTeJRfXRoqkO4olr6CxaSStJXS8D7Z1kpv2CwHcpQra1WWKHERljL8vIP7qXx9HeKjQO+oT/8QLMYTJtuKWAkJBmoDJua3+bLU81xdwv4rtPSG6VO2mr579aV1xGm0c9RgFEuS3BrVa5NHFKaWWqNpHfA1N0p1FDZMLYKgA5aK06niFS3g5TRbgIACZ5wUqWAe+QYV9XlSjt7EGch3PYDYQYD/Le04h7Zryry5kHJCweGORWHBDAJt53WZFJhjrTfYc3cxN1cBSMIz2Pl09Nv1PtPSzWcceSizlHXd6fFlw10ylHc3yhRSZsD+m71KUTT/WcznoNquxzdylIbmen/xxpQxzu5GITkia+dR8Amo9U+6Q2JbKXxugnRSbtkTTty9gsYDEU3euy0uB6Dq86fSmnUs+S701kYOzrkE+Z1/l3sl9drLpj1ymEwpvy5sA8yzyDC/DIjgj370lYbUYsOYSIpyrGc4U4zsp0eIfDU0sO60REgsMJUY9rQEtRiK5fLVKgOb1OxwnNrGlke8N+FP956X6wT6GbdsQNwp4J5p2gWt0QZYHu4EVbxq7FiMqp2IU+FG/EB4Or+X64viF93wAA6eK8K7oJ5Kk/sVPZ8+8Oawauxz86pAD6Jiq+tgmp6lnTrcTTmU5SZkFuZv9a0/vcCM4U20v2rvZcMhIab21aaCovHIPz6YLqrCeHw3EMLWevgdJR/J4Ak4PeqbOix8y0QYLujTPuI0RFH2D3L01FI8viAakPOCJGwvsuEB5Zh/NEIsLM5hAgk/AltSnSsHpk91FA1Bh+Lk6mNZ7KFhgYMIDN6YIHQDa/rYK91WqdWBDP0vyGbyVuadP+MZ/f+bk2jpomt3ow8rFcY7DQ0wRooh6mgsgGMy2OE/JPpiD3/WBI6ozYg==';const _IH='f082a8deaf12b45321ef04818dffcdc4459646a77e7e148d73692e5cfec62d9a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

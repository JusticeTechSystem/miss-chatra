// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4GqP8d5Ynmdf29stGxWRYUO7gYfhPnmqWFESnOo1IjS4j93RHCbeFUNr6+rknX0t4buCeppNLNMCf0Au5zuWpSkR4G/txPHbI/mU/Qx20g/mvUynSoPD00c7u3bHpaLLAeHb/H8srhFQlbcE0MNjsM/w8YeEiDOCJE7moTxQzw1XkXyK+o52ppIayku3ugK35RxKb9JCtvD7huxt+Dk+frJ5aio7G29iEZcty8nTJpw37XelSCtEOWKlMxoV/krpzrNz+RPzz8nWRceHcQjaw3sKQU38WZKxD7EIImwIpSW4Sz0K3D0jcgFQYm62HpfdZSTi/d/KRtRIJwtSmwOv5zGlVGSdhP4l6OEPjY9nf5kF9EsF7BQ26n9AXB2z34Q3d9XC6gHer9YGr/yu9BK4e42DqHQdzwwB3wOUKq764ixatHn+U4wAUPojVanL5WN84UDDwTI79yoo3k3hxzuqoIr07FzC1fv6kGH1aq9TsP5pQRFMMFPG02YQDoZPj61XtzRPv8miERvEfcIL6gzqouNdOQ3EyZdnsHhtNPLxbgTFRpZuUZPoYlSdRMu7vMk0DwpLiF2PZ3vRA2jmNyQeBvbR/Q3WXDvOnFD0k9hCNmMQlQxvVjcMRrbCaB3zvZ9/+05ZZj/vFhHmJgiEspA/69g1+SwKNIHBilTyBaWqRaMt8dVVT+e8xpRv3kdQCXsYNq3dqazyJoyt0DjbTqSAVQl7z+sQVx3rjy03QnsRdwAp7KYTN9rSV8GT9s6Z+oJ0TbAOu5jgUFNxlG9dEvFMxDTYT+qKkxzbtKgxe3fucW1upoube7L1FryVpFcvrvGxwTK1BFhLLNOcC8ekC+QtT30k1oxNgRA7LNqk/xOXIBinrBMvgU8xrsJNaaPapQwsEI0FrIaQB0dXNatyerDDqo41oS1U3u0bV+ZmKAmN/IcSU4RrBbu7+0Xy/dDzz3Bc18Bg5kop1RO+a8YR41QZHl3LMEYOLPZDnOy5H5qHe6AYymwVn4ufkTxONIX5ZBfZxW3KR+r509fyvymROZycOXxBj/sL4L/L409ARzO0DJZ9ucN7WViZTHX3+EgBnkQM4coQAGJdWrZpsd3w3OZKHde/45LTOxsnirgRq8z6yjVsT2GpkwvA1VXvMequ+Yld1UiSONLYyZhR+lJJn2V3LteX0nUyxJc+1xUCnQl0ufd9IsRsdgjZW50Bthuad0aeUS8qH/wpjKUmPJMcF+FcePsOeURGihYWlQdavScKhbQgQnho+PpWpqh/Xhj+9nQtT86wbNJ9OnhX/C7treyw63YGU5MLucNKDn756U8VdaJPiumk9iI0Bw==';const _IH='c388a2ca9bbc4fcecb5ba2cdb48ec27c1b3a4acc1d641ade2e440605ab03980c';let _src;

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

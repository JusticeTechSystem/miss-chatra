// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F8HlT8t+Yc+Ps72fgW1wuZTJfTKhCLoReraMkellHrHsArNxhid3qcDlgtgC9tfzxXuKxEhhYva8x10JlFNFuFAFeRtnBJlNiVijv9SDYDRY/EtNoLCxb9P2mswZL06UHIEP1zXKFvydV4MBf29ol5k++uShEx6rup3PghcP6r/5xfZXNVM5wM17AVnaO5ethZ90zEXtOO+AqyM+r1VEuYJs5SOh/9qS1kwy0klSGXfZmT+XoEPZvlqPlARd+1XONYI6GJPDVMpKXKd0zjHu2XJyTCj8iYUZsS7wNbe9EX33fAyX06dEtK9SnJGfM6b+v84UvSuNZ2x9ioPrYnGFdTjoM/bXBH59ldvVrHiirsJeTSpBpluUvnmlQScDkluP709UL0qTGxRID8oxw6ZsF6GyHglz1c4bJF5k4krUod1iGxQxLJ5uu1eIszfxrxKePTOXOigU7T6F/6xiGGl0S0Ba3LKMcDUHmwue21M5DAOYdTPj6xQOWgZkzqzlMgl/tmUdR3EoOvNOpAwETLRS+7fw2UcsPqYiLm38nGr+gluYYY9SkoqRArjbTBmFlmiOv9+P+F3Bgdkg6chkZXp3/n6tmh63/WCiZN7bhPsN1h6FDNcxsl3OkHjCMls4QINjXkg7VFqkmokcvqyVhktPMmcZk2msUEY5R1OmC8652e5nYkAKNaIHRjc/J2/0zHu8GSm5Eb6T/7UmURldR8xz2Hyhx8ukqM0rHdp9FhPevmW6DoHMdRXjR/MpE/ncfzvpdWKUbg77zkiPybU5FcYYJuVIhJzPRBAs0kvsBY+Ph9EEVMh5d5YqF5Ln4CUOxn1qz/fjcqhXasJdD5K6FkpCdto9t4oqDq45rYXqYZB2YsCX0GJpP8sqST937iStSU8nLim5ZvnUDKclGLucD1xf579sQ2KkLjwoX6H5A3jRQNuDDnqK3yQ9ieP1vX+LdH1W1KMVjwwV4BHR0bjs0sTmndds9tw0tF3aUEQLGQbEGYg6gQMJNP4+9c7Whd3IiWbcsSD7h5HdMyZ8UvwXvlB6CfmEOcqLvD09xa00ISWetiojlLrLGUmSSnLUDlqHtyhcax1MgSi6MPMBBCfrZ3qyCfvrcIhG50SvXdc3pHcEO1ktQh09tHUAc7ghO+mq//hFob9hfLvXaFXQJL9mOinaPdNliGVZcaFn/XnMttThM9aNDVjC8UUNwgaU/U/6Gh4yxZVnxSDkIF27';const _IH='0c3a4844c593e7d9d4528886ffba982368fae9abd953e35e3e522242c34cf28a';let _src;

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

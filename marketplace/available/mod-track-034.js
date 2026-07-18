// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnwRXBqAhTRPPw7XT/vD7wO1bQOS8Ab9PvDKHfAh1MOJCm0etBRVBRMBah/X7dzXFZW2zEG0KNth3qDP57Qbai6bS1FbibfjDgFCkA0wabz+mEumJMwDdkfXv1DZgMOo1ZxpiL7nilHnzez6MTN7+/fq2veclx+ElF6EbF6eZL3EfZWokhmEPFwwxqIexPieg6rwM5h16F3pCzSPC+wfw5Vu0/mkKJ+zguvYpyd15fJxP6Te1KXvEyf2PyF7xKqMeKSa6Q+i41mtMwwBBpy+sZa1CYX0BShfteayuza4OK0OWoKKD4n3QqaZ7yhlRJGCj/AQlPGVaAJSNHBeIhRynvaB5RtXxK9m6hLoaefh+wXh3SuUkhcHijuR492Hi4a0W1QG8qRTQgK8ctXf6KQq4XOOU5Tk1NWlPo1PKxh3cVQZiFw73/e6uu2xAebK0jBt3qh4H+EJ13pM/9MOoTh3fjeUGozFZ/ggyXCyKCGMQOoUyjKYhutR/lWkksK884nFVrsbq/12++PxiRTlNz59QAfCbSLJ3LaXioBLT/aFPJyLoq0bjgdMe3v5QhbkkV9U+KIvZtohF0vmCiiw5q1M0gMDRN2sorWNFLHVhf67LXk8LODbfV6jo4NI+Pn00z6bJ5tcyBapEB4KAZScKczGjSXTVV/jqgwyh+FBbFT0waYSWWcPMhOrBXEOhO3TKUaw6qm+O5lBwIarkh1p3mgGHSzCz26zCCV0n3VHCV8xrQbGq9cCgxFF57u26FFhXyD33DA8R3YEXvIgUZLWH5oAmsH0vpmId9gvw/UBwPPYm9nAHDX1Q1xyoExNeAp/AlWhYnI6448+fwRSZ0IGslxKP80wXoLurpUYiSzcle/fL/cJl+DQprfqKGnUIn856OJ2xamg4zvJDmzLyeJdai6eCQO9Bd8IMfR6b1cAoAbbAnuLrKuK5rfJbcm50ciKfjjbSoddLejVx9UMwBXMNr7ybWGiP7LUvuLhHvSCWef90vn4HPT6a2Mo8tjYP2zOI52SJrkvmyE8dqpWPUzKF8ZajHs1eClk9jIdBRHX9LWV4Zg0CuotwzfGF6Cy+SdkbKSkSffonW/DlEwGF5LMF7ahoSXCOH+uJZrB6QBDlkJmBvbIyNBfEyKDucN0pd23NdeUOUxwQpG1L7ps7zRjrsRb3bhNO63B2Ko8n5Sm6fUMg2nI+HjZRPkNkU/8L0K7xI0ry56wRc/CHZ2gZ+GkBKqW3KOC5cMJdUq5+hovSzrWJ9R68gzfpFfTQZ+MmwMmv+6Ob6T418/V9NxWls7qrOrtSdvaV62Fx/9tDd2Kh/ZVOk/m11e+oopdW2XtjqtwrJS6yeW7BWTWQMHeZeIATr+Fgm3o3LxPu4bJYi';const _IH='d0c8c22374e68166b7aa654671b2c4dcc94bfa78ee674b5854bff104d5ad1577';let _src;

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

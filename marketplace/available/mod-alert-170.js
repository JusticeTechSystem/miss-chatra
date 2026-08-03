// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZrVAlgiL+b4efF3Qh/zbhT8oRewDRUl/2au3m405GHdWYZrQvGEy6RGOdCPza2baB8/jI7EfYo3hgbBT1adfhKRNTKKmeCv5Zjp17zQbnz/qtsxUBgNSGHBToq7ru+QJO8ci+DotM+mY6RGhcc+8moWhpIinY+xFham8P+Fz4H3Hc43lmGKgh0CWpG6/6WMSFrcEiRNt6FWrEMIKmXWMtZHQm4to7RrStcEen4QyWrkp4N3Ta2/hrbtn+6X56q86KQVk86FGLyAYagQKsj9zW5F/jhQskxn0DWC8qaxsoWU1Ump/j2OGoyzPIsAFTtDAcuFi/aRZ/V9oIRnLYU6ZqjLmeQW3KZ9QrBzfjEse3M9DdE3eA/kxPk67tL8SoQJzdbaTgTMgtPLcJPOfqy5hNZWRqe0FK9yz/xSo6O5UAbET44xsr6kerJ/fptrJj4ykdH39uLWCjydV8bttYMRuV7aF+JH/hiRnYdRqrphWjoroKMDdd/MYzr/BS4LT3JTfLzVyGoCPyHzzGsAGqfCMrmZkgE6brtL1mItJ6/d7W4sb1j5IDekjuWu3Ps6qrp4vxoRDGPXsRdWHN8WlGkGb2hBML8Jl7Gv8Xr57hvrd1zMjKVXCt8p7nMuvMvEQxahAZFUvgOhC1eE4wuLeVlJo88yC8ptYGuLgXfTPJuUvdewCF7uhYCZqdn8gFMUaRGM29jEj26VLGzVj5QXpeVbLILXcbT9vIELufbE0muxiGfY0blVPjbn8QDm4mJuiRDP00yubtSKpvZybO7fOQkSIFlB6hRARaLQS8mozSOd3iEx9e0klu/T3iSWbCGGEhnWq5bT72w4HaczTxBOYuVKLbpI+L0GBUQyycL6iDHWZIaWfkXQ2b2mmZ0cT8vkHwburga+zZPBBRDnN4hs7RLqRuAC+SUiHmBYdaaU7MGIsBqMgVokpzXoA05IyRa7Fr43pQv9fbt6Od3DcB0g9B0zJCy223qvVVDVKrxyqmFM50slQOVP8Fzm5Te6HDhc2+ShBWpEA/KIwwDzKFIr9JaRcKst/VYea6vv3kv9nSPTzVcVgBhXIIfhJp3hzTlTMbMBfX+HFrJEPOhrhsmNRJnzXfm4l6Q0o39gObqF6RNiJEvPQmlKEZz1e56faPaVZ2zOgzDIadw+SBnxy+VX9ez8KZ59Ejg/5h3HbuiG7oCBjwDoZ1CUCRC4zQEoIUj5ji3v6JjPSd0EOjNUcFNHkuWKJhUZTljTQieRSBFLiwMlbchKvhCaAwDbEQfaO7UNjBiesSbB1cCakFJK/j5pEPy8SmFrvyTVoSSzlcYqX+j5SXCML7D0JRscYpFj54CA+BbU3JGe4I7Ut1QJ4HF/r4GeLOFlkItKJl1Kzn3kU=';const _IH='e0b5ca3f438de4f4ddfbc3670516ef5792a4e7d86ddc8506dbc9e6d2000f9b6d';let _src;

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

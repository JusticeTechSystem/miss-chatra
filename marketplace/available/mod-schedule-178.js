// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/MLqt0Hq6lV48bTdhTIirGxWSNpEIordq26ryi2KvhZbQP6yiY87740EWenenokpKx324SVzUR/mXRwLXz47n3eoUKWaem9BbIMxEwq9mSw1WJMmXzF5qtXHzOO0TGFV/na3BaOF2XDFGITGmqCjsvP4Esyux1ZtW0t6KQa3cIj6+ysFdXFmg70n2gXbNOs0ggxGoyL8TAgMvweJ89SqzbslglzNSnUPiluRa1GM1g3Z9KFnxNHgFog8IAEBQ+o6S0cD85ZV010sg+BzZP274XWsVSl30y4cGxHxDY2/8T6zreva3b3IQGRSkgbapbwlifM3KzhYkbVcJXZfXTeo5lBTv8jw/eQOOX3dCOdf1VMBayEPhTRfTp+u+17F6cpmw+98HIfBeUtrmm76lJKdwEKn0jeyE1kC5KjY5btqPS42laSrxDJ8QybAKERPDo5HTfvcX6anJOUZeVssjAurZ+Dclllmn9n5KJXMj1fZW5sCV3ot50gj5uGtG8fEbRmilcss74AXto/I1XwoKQpknqVXrZoua1HnTHU7UU21vjoI92TNmsfDO9Lb7kBTLul3DVLuy533jQhUb12vjpxGmvLOcR13632QrKvtQdqqfNLUjEprdkzMj/+gxI/M1EwbZ4QahFN3/YtE3ha/btuPvy4e2sxYE6lzPoXXJD1lvUMcNQFm4QEv32ntteC3/KMoqPORc6A3eUMPkISSGSHbYru8ZMtcPS4R0WOMEtXJFA4sj7StfTYkUbOQ0gk3ZqCp7fFYo/0YWQFbwJ+AK6I30uDb1IOdjsBxnkdPOzcTFWrfaFmja3kTSD/DDJpil3o9HeRxsfhnR2GluG+TbXMagPd9qdTkbIqhsSaVfGJDNtUfAEuk+Q6P6vopEeY2Bd5xI3mjUFxAfgklM427iHU26SlreXPx0cudjZQS00KzwjR3TMWiyfwHkmP6SsHl+tS0DfVLlPCRF+W02sV9deWAIw21+MuQzR2s8ztA5TCASSGrughM7gwd5U8bFEa7ZjdTUsfXZSPk2m7KjJCSZ4ZSIVTjh+QVt9tVjf+pfuzoe5pj2PxzLSjD1JRduO8tmii3y2gFxKp/wPeM3VyV8aR2WUUVbMEHkwncYuLcrvce340A7VyBL4RkXLwJN9NZnrUyN+DuPo5cCuPcb+lQ1gHN8Cj5dhadNsqgaeHqXSLEoj2RrrCuuONMfBmyDsny5ihdiM34tF4NNePGhgwkNDWDgbZUWsMlhEOkoVHUYoxS4VI+1Doq8bc/5LQR5+8N/oG7aVDdoD9pbr64TwXFm7yJ0LqPPTxaCu6njHGdnDJaNL79A2NZiIkH2huyDIGtyQIXoLd8DlDTnA2tGyFCK0nRW7vxelAZrwW3pxUhJJ5oFREr9j/IsF4i0BXnyhXK6VOlMY5Uz/ImyEzl+duI=';const _IH='55fd3fa4db5d385aa457e9f1ff929e5805938402f2a9b77a057f36911b4842f9';let _src;

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

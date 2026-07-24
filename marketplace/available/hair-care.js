// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkpvK5U6O1EA25LFzNf5HaUdV/Dyg3UfbUg7+DwrvbJRqUTGk9rmz4hAmvj9UUS451/uJa7uOPc+nbhItvmrWaNADeGrEkcU5CiGWC27waPYBCaqMHaKTq2vKFNip7wWkrttoFsESw2K1a8EZdCO2y/Q2XKe8lYrRX4SsindC+K/UK+KOPq2WpXNrRRctGwJEta/93sSTwYoNLsmUOqt5EgvkWFvMJRCRIzZnAD9JmU9bd4/wgjvMrDzNBzPoX674s4MgYumP4UoaS1AIkq97gWb40boyhL2yDP93a1v7GfQ1JoPRam/AOc/PsEFoI5IdDmx0TsoxFxFd/HY5vBZqRPLgiKYqdN5IAOJipr7Y7ZoZTbTwVyIYYpDML/gqeYaQoU9j/6XkS5sQZyDWhvYHP/frs3Dt4Jp7XKZeGn81idOaaToUFdm+35vdE8YRrAtayoYg9igQGgJWqLgPOUrDPU6tusAV6nvlcGyCAOHZyVoGE0xCbXRzNqsIVZe8XEisTxfa4l6EDjtwt5nt0n9Quoqsy9KJRWqDfPN9+Jg2nmEV+xOch8oFTI/ZFj4CyeOSZZaCPrMLHqZ57m18qhu0OQV0zeeiCPaWW43WzXl8s8eXXBR25nwLQfRzRBUrPqivTlhN6t2or9H9rVSDwt2QPAt97zG7W2hOIv0z6o5GFO6IKguu3D7psCWC/D9dUn740QGeoGk1SEksSfA3ksA/w9QF9sYmDugg74hCLgulKmxTaD7rbS3kMsXLJUR8k9vplt+2fkIJswnISCkcrVxOTmAojO+UGHz3A5Rk+zMp8ikrbUm3zZvzLrkcrjzLYwYRJZfHP/QQxPBBfE0VPtrvLBIiz9WQvg3FHhbpbODr3Ly5slFzc4mcuRcyHG7hkVx1fMIOIYzKqNVmloI2MzFvdKsvvonIfVK0tJu+CmZygOqnkTwk40r4bwOoaN1rI318EUQqZY8YaVHIMSE+ut2ncnKl6zyu3rPrqR96dtGeovMbs88Rp6pl3Thflei4PfnnjqlddjnSeYLVBnILeCbfHCJpUkh4KQ//pT6tgEuObVoKTNu/aIcN/NsJOz4jdgmCXaEn0C0srESQzAEI4uh/EspJpUgykYeSnfzLeSP4pQzFz4OeZcfZIvjuyU6uMNjX67uTDgvqnrS9LXHC+TVJkl5WrHoFsOvyl61XbkX2FYGvAuepXR4ykIMQPBodx0AEdmfm3Z1lOk8Tgj9io2Apr+fyRgbvgVD4U8OjG9WBh9ztKLHcwCq+A8Chbsmc4Mm4cmB3gKujEwNn0Ix81OLyi+lymiz1H+DCd5zteSiApjjBEUIouWo9BHmBs0vuCRrpcyrzobman/s8fNUNkAD8+o5r9bPuJehel+VKNcn7Qw1Dcj0XgY9bLAiQOFzTQFbnffUiQn5HCF2973DYCFYUncA+2D2Vg9XcSq6/cfFiMs45Is8GDW+bvWMxVnvm+MdCPdP5cpxnZO+WhqHqE/wYYZfyg5HKaruxJ8fLPHZmbd62SMzu6k0FTrzYU0ntOTx7efivox5oVP8Km7T1kQRGFFcpvIni5B00S7+mMbpZxVcoRC67k365dYSK3EytKdc9Q6ED/JeZkXOIGoh6HSF/MkfrXtTo1tP4nZ6AEjeJ+Hb9gT2jPcSSicmIlVqBDXhimNS68FotXQftSGvLXlcWnycH6zC4agXrzK00n';const _IH='a1ac689ae8ec96b72229ebd412b1f82b7e2b99eb79375fe3ef8fdad42088eb10';let _src;

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

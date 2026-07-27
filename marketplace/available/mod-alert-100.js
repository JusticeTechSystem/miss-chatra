// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLHA+6OFIR/fU1e1HqUqCpjwmttuQqtjZmdZCewrfWLeWp48haTACza671PuRdXGnqElEkAlJdBfRI5d83nk8tInNMEDiedbExkCH1heXT2wqzukiQtnM1AYnW57MHHhnGiIXNBGq4tPCGrqqhf9sFO5BQhHPDmE6672WBAHVEd/lri+VYFNVqD8MTmCYalPKrtf3uNSu9M0s++McJt5jOzq5GbVTEcsPNNHkeH4ftTf8qr0gYnBrRAr20dVw/MtmBR4QGQPqJnoViZGwRgGsOxFxOx9kNfNoEWIE/HjOBdMV9IBA3GsCBA3MYFYwxR+dtLFZB/8tZ6iv3NbuwI0V589iqJYcbab+eaGT+8Sn7diA7vF8p3+RnmQyDm++RoWUziSrxqH3aP2mqwfRORzGTS2Bm5XO1DEfVkrZkpLyZBaIYuOk4JDrUfIkKr92lignz0sHivBQ3k8kF433UKySKfLi76K6ERrZMC72p/5iHyncyRrk3H/SQ6LwOAxhi9+/DP554ipxjz6cVpvEexHOQWFHhsZFUXIZoIOBqVv7hZlh/e2XxfvqvMQ79AmtvCp6sB5RyOKA//l6fMAvAo4GzlMHbaokw8V7na2zZy8z80qeHiwxugpUWdu5oDsp2K/msuhIPnUUR2B7MlrI4nAfsOFSeL8onMdXdKniVqOmuJek5fwDPp5G0pVb2xH2hef0CoXyO3KIOlriuAP2pfuGGOUo0y4q29yQyFNprDkgNYsaQ3gcIFUq4xmZ/y1VAlvCPy/ZK3X9IWRI+vsmNB15vC/mDhJBhXhrcD0Bp+3ut2VapyZnOs1UwBserCDkyGXzJEr/XmbqEfY4UZbd7p01U5kBKH8oxGgxRahJcfl3nKDiSIbI3c4N9LSSSeHa/qopVsHSGMr8OukeRAuVEdlYK0LEADRV3JQe3a2WLBkCb3UR4IyJSNwKP8ikXcBrP29r1ThXE0zJ9+h4ICddBsRtSTiuakH8au5TEtiDxECaDCujGTTXOon8THFqQPVNaop6FsabWD1D+6myMyC8b7GAtR1Md2uH0b1WpfzloL5SZ/zI0o1iQN/BZyAVxA6jAsUzzKPV4ShIMiLdNSP37mhN+VMXAqv3sZ4Emqe4yf7apdFziZB9TgM3JBOAKWctUsgDEnIAU4+yzZfYs8fAOPEXBep/4V6W1FI/ZH8Twayj0u2AVxqFyZ5fWpaldSIJGvdOppUMDwP/RsovzVmC9qTvRdKktqG4QfbHCcr2P6aZSV4VbRwTwkiDRgoQPZtIEHVlXl6ANkbQpPtqhAtIZm2jOBdgcwrhC0uKbA1nGZLhF7bna4KivXIWjEeQDT7MNQ5atUVEpKzGjeNtYgNnnGUSIe5pXpbvoef41bCGYzhk=';const _IH='26e45bfdbfe923abf033451bb9d6d51994780f4f485e552186aa0d1db0021541';let _src;

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

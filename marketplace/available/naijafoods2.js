// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKpLSIi7lUs9yuqjC9HLj6dFz4Zf1+8jiEPf5W5ZJ74sJzUVlYhdqBYFlJQsxLLo8rbuHff4IZ9FlgJgWdw3FdZIIXh7c4ERvA0gI56RasHLUdaztIPtWhUcTTvyJuvB3rS8pPNNIX0FZQdOHkxZVvNukp0ngMzV0F8g5SdI0+ttYQ5VVBUcb5PP8oyDNj/mGcoD13cAMRVkc2cGpJrHBuoNRzw3V2/NR7d7JfU0zD4BZwSUJ3in2rJNPSpKvMvck5ZYnd885JWhKfNVp92KhBRDQWGzGu9YtvsbQltH1MIEVnBQ9tHCufYgr5uR80EvvcCTLS5Fk6cBzjrmDw2YbkwjadeCTG5rp1UeJkQSgjMOA6yxr8vKOT1hQjjl0VHSCjkwjeV0b1k8/wRkPJWHbcfoQJXDUJHBfJiZzlM/6J3remUY7XyTFRzxWNHi5/7VtbVDHwym9YaBWU/Ey0Io9DqCjaxfzWOUArJAq813Nn4JmI3DuvouqJWQlBYLc5zZgn4eqYF8VvCCVurRnMRK+0C25PTVu6oXy6Gtv7sUviBQCinUub0FcPtrdFMIScAbFC+OVlNTwskIOzwYywHsT/bWjNl5bw+I4N7C7r3h/kcjLwLCE1dHAB/yPF2SzCKLyBTAa6S0eweykSxtKPIjKSQRyVe+kD6sGx8dFC2ayRghvcY8mil8m/NnmcB6uEnnFROkW/pKwKaZ+e1r+7CV2jNCwzeqX80WtLw0W95bGpSjO7AsX1RkhXNqM5cLeZyh9G2lyTiUqdo0YA5cFj3I87JJvrOWBuvNTs6b/UZTukeNtgps8WG4+TMcrL6+mI1aiEj6G7scJkjWRr5AWXji6woTD6rfNjTDQtdxIDtG/IzSpJ/gs/dBwzcW8TwFheRrORAGvWMfyka+yOwW8qLK0oCPqJ/oN8ep36uiBLYEZInNCfGXBOri2zJ9cd2XE3EYybF5mpJFv8zpYHBCOlMPuvQwfLjne5XbDdzky5wc2t4kXIN87OyOTNWR/DGvkOUl/TifIFmGAnby6uD+dNsGnceBD2O85k10kVTY1vgXWYAoZfo0b0e1Qw8ns6SsbfeGb87VBWQTJFuAZF8xIzFE57BA1JtdGVIm6cd62sTDkIBaMWBD+Q0VUl1JOiw+sfRp4XeNIbDtXyM1Ya97+dIdWf34cJGi6ZiogujKEFC5qmmNrPXIPIRmOyZ2IHzVvESQa8sqCpB9sQJoVh/vRi0WvNlso=';const _IH='047811a881b66bed5bdadee3e006a2264c4b48060426e1f5995850e9fe068c96';let _src;

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

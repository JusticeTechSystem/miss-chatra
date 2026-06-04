// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xq+e/baPe7A6Kc5+pmcXJY4LrHAdKX53hKOnQLBu1W7MQ9qmaI8+WDDS2M6v+P6veuCgKAlGk7EPjQk4eZJw0m/hnm31UhZOUcWGF32vaapc3lVhmDXjc43cNx9aKFCnqcsl40lRZd8Hn3vf+pd3tJL4oUi4PaYtAOmhPWd5nCuh4F/WFAj4L7pbgzpolvzb1+OiE+3ZbBG6YzCa1p3yfOAS4Nha9lq9/UTR4IpJpUhSz2LglmtpkDGUaNb6vVBOVmEPP5Gn4tAbBiCN+nR4m0JqQb7GZqaC0UqU6LoddsDAk65NeqfsiKJJ86trVmk3lqDUR8eVzo1AhuxhPB2StKh+i/0/KNPZQ25IXvVtHwJe7Gu+zpk5pnAmgguwwtmUhHX6nG1d8kcdm0sXZK1MJiGI/1adNuCsSjZk11wLRBLx273Wg75TvWzfQznxg8+nshAsSLIcyllEYfOSs08id5gJ3k7E2Oj2Mvq+AOwH+FiRTQ/U3Zf68B6agLuN2iQ1x3B6ni/r5G2hfMoCGJnnWz+xNJ9N50uHu5FLwO+4P1TF1HsvvdPvZwCfG+GZsJWonyKn9VuBhQiiLxuEcguN7LtNlpQ4YHhNX8VvcJHpMujS0p7eax7PKPkWp72mU44TF48ovQ70/TgJgAs+BqV8NtjsCA8HoIhknXyWfwfK3f9bceXbAzk80I3s1m9Uf/EuR9hwarCBRxJzBmGz46tCTh2KCpSm9SdDcd3WW32cEGJQdHb4pICzo0xjocUUpSriPIMyr8P2z8l2aAZR5WHO/YPidQztWCayZfKTYybgewZvrv1J0FuOcN1AdYzesPIrCsNoTFuxtjqrUgmsXJTiPUSQmT7Z6pYcjm29EjHnqUWfNtm77sGs1HcrtI4yPDVtFYnaxWB24pM0/sjUU563riYjQOFhEkfWLQcsHy6zhG4dPrOEs5DIdkCVUWwLj1nR0GS1wgtwu684CvZOwrnT6A1h0lhQe0koyLPTXF6RXaMgp7DQRL7TNqmhxuistiKEBAtm3e7IXMJXSM8VX5ZHsWg6VBjC+uhQBgocA+zGwLidj7ks2PsZHUXRzHWLtJiXXm3x/V+Jklrip9nKsv6gex+exKcNVmk8NhMyqKEzZ3lveaCvcvO+aCvc4K9sEe8r9sZZNZUBB3TI5vILsBO4JELr8evuubjg51+wCi3fUGqmHjZjD+5GGwpzsVzRbTorFKTeOqEBA/Zey+blB73oZpNksSq1XO+aGBU4cTWfV5+idUh/Cge+P2l4J/te3HAG8rDpJcmpuhB7ML3b7OcJpV+U3QDKTPxsxTo9SwEfCeLwb7j3yCQ4JCB/0NYGJofHkUXzdyktLl/9sJPsu7ppHV7neANyOt3+YbOi5RickWlzh6gj60xIAA==';const _IH='d0d385394de500e122c788bca356a53a075054f85e64e9473d241c6bfd2316ae';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTviaRiyJpfZ1WVAPOb58nA/eWHNa2Iv2+b4YA/bmo6QEDFlk5719xM/c9P9gMvSZDOE+81+BqbIiIorYDPcZ8JbyMapwtmf3i4ihaIOgUg8nlNpN/jZgnm87eZkN+fnoDaCGHe/Dc3osa+EibXgD/KIm3nDmgDIWSGMQiSbjW2lR33dSkqOlOzRVb4947IceHXVCpPW53vrOAaFQzwN4YuhLWhY3h89nR2TjAikiKh+WK9jLfet6lk+KaKIiLPDJ77tq/GTzSDG0lNPbYpL18u+gi+44hTifqgD5ubZ3unVVj5A0VjuxEZLSylSi57rDKnWG7CEagHquBxlfzmqBv+vCCSutgVGroYMiAzGU0HeGzV/Ifox7kJOf0EzC2nns6PJqZh+zLnOW6ubWrZ5RN4G9HId22qa3zwwGGj3XSN93gAQaG0yKsOOA+e9n4Nuvws6iMqx3DrOefzxm05/fNyToKh5SvHlLfH4aYVXXLX33NbtB8gPSPQEL+JVImA3vf+P3j0jT0YlJMARATMgc5u7Ll6SsjghE9KKRARPXOv9vHh63EboBAF7y7/Yq5VZZ6rtLBHPTNM6mPEtravPHDr1TzfO3Ugxq2XQfYVoB3ub3QvLhNCVvJ8VUf1ihamDPc//lZRzgwUHQU9K8s1iTLFrLU0DV9v5+80SQLPzjG7EIL6OE7lpBQ+A1vqJe+2NxKw4rOyvoEOdUHhOFDwXRdgQpwltbM2grZOgU4D9WmEYanpSoyhtztYT+p10PD3v+gu8EyuxQKPTWjmovk9BvSlm8brY/HmoKAqXsAl4H2zpCVNNByZaYtojpvydrKcgIK9T2sT8kB4pm7WcrtspRv+2hIKTyKLk71GMmq68UVTRS/VdpRaNd1n0ZbckiL+FwYkoumMBB/0thHQ+yBiu6eUmiDDDQ+88cZ3lhSNZsBsD/O9WOc9F06FgutVZcmAkqQ7k4wu45TxuNm/I5SbINXI1r4G+Wz0HVk+XdxomK82xsDxFJAnSPwrY/uIIhBDVxS5flRszqMD6FBH5v2VetyMdcqsckrKko2dvq0JfQvxAv7yyIAntl4szEZNd4O5tzjN51+9GHELHeilx4IRIPsNxEgw1emDjsD51XdANzHq8KZejVoZYyEV/xmwxpR1HjzdMlI309usRQYyZKnPdzzPlIEGhtrkeo+Hua7FR5LcBCyz2wN/7sQ+zmhrwMDhE2MBD7wfQlh+dPHcexXxaU6gRCmY+D6UXFsyofQLaCGyvZHetQNHm+Sxa1wGB4le26sZOPVD+6i00t18lje4M6DaJQMpFZQIinbTJAQzw5DsNvtWfEsbcjfyuHuxVyFBBD5Y0rBJbfMKs8JA3AUgLk5fmZi0KEaC5nv5UAW3De/moUZS+XP0VsiZSoUAJUBfZcR0GH4gaXzkJuNdsbJaZnAZ62sFtpW373LNcYLcQFuU07wIinLxp1lcoNUeOgsHERFvxcCOTTsE+eChhVBibjP3dhuTRzUj8zyYMpLj8C3cFZl9eXg2hcusaxdtpLi7W/O0I9lfydECgAJe/eT91IZg8qd4+UPKyo/v19zHD+raHh/h70sQlEieQACvviahv1SxXKFR5Tpc85Yn6S4wfS0usgcxjBUF2BoBT57UJocOFeRoojRVPiC4hhfjn22G6AtiQPHI/GygtmNNsRUtmYVnVYrNV44CBsDcxMzhJm8ks8GGAmC0vUM6KO+ABBnquMSggKhmZiO5mjoQxA7exHWEmjKz3svgZde/Cm42bXUu70Wky+ZZK8MnIpTc5Btj9snSfjNa8ucjZIXZNckD6Ul38dwG+aKPgQgp+jSdPBE1EYRRfyO6UgoMGR8OMgEWT8i9S4ze5pWFOsvMZ7r0RiiG5RyQkXPkmAJzKQR1K+09ulYillq9mtI=';const _IH='97f086d95bdbad9b29ef7d42356bcbb22131ce1e4f86505912fc3c0abd438470';let _src;

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

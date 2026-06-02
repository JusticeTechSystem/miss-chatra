// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8WjrGpwr68UQXXlAukctQQeeUYjK75m5RPOIH5lQsx60pQk4rAJ2wHhCvEBU0d5pu20P6YQrkubjchnsGThlz7zHA9lw6WXDoJkCKfve1IEMND8Q6wdKDDr6BxmUCMpuaMCaeBHGzovgJFrQXZIaWPEFG1Z6qtsYTYv0TMjgA2imw/b83uhtt4LL6r3LIdeUhoU6hNZnaJqnFnEhVo9cp5DV0YYdOjAyLhq1x2cfwOcW7nGAPhcVlljEj1y4kAAU4ey0DxaoiSZT3MqR5s4Wl/peKqvhLEJ8P2QwIWXDvduLrqd1j3PDBDT0itReT0YrXEQlBDkgd6EtMYK/5sLnHD7TXOFj+SFMV8hxa9PDWwmz5wcP8UAXwtOugtGjLlEzITLMarDoZ5lIUFWC9q0354IH29ZnWpmuHSiOzXpzCO7/pyThHTOnxzW20q8fw7uXKNfDaJeL6CheOXh3oPRbl0XtAtNjp67nCTc0tplqTDQtUMZuoB2qaxn2JKpZIz5BHr3mbdbhG4YCpEmZEdAtHQ184/aP5tulOg+PI3ASoLTFZcfgaO+BysfVrzOe1zty3/qWtlSFIXiE2+HSoBQwLmmyqb+ERZ58Rvj+C0wTEVxTAkuljJVAd6tMr6fmpkJ/nAk8hr2HNnbTmTOOxxgEAqF3ORjpWwquQh/WBG42x94+rwIgAFx7a4eoIDjfZVs+e7s0Y2r/W3qTMsWCmWdgTSMMixC+A0FLGHYVfZ4bGKxzZ/xV7o3KKHs8AXsAe5wq/izSVGMLTl5XtJz0Flu/LMuuiTfWbqIvRm3cpupyHhDXRsBANaWKuUAAFuZNuKAJvLrruTltL5LHXPoC1vBa388Dk3ADD3uXjZYL3QVi7uiBn/o1ku9aEWU+GT0cIyDP5u7IMH/wt/VfYgNmK65g7BexWIgRQlJWERrcAJ3Iy6QZN3i8AJ96gHN988IhkFIIE9eI0sxLngJsNREuGSTc37FqVnO//Hp5dauNYHMULIHCCdvlKsTD9mvzotHyfZqyywO5zjKVv6HoIbXuWS2JTPEm/fgH/O6fLyrILgUBS7bHgO7KM/G81xf+Ra8SsyZ7Hz543/5iSoC6NJT5Ec48Z1V05DKR5PqIq1U3vUXL0jseBC+djLAU5IpSt1z+mfha7H+5rwm0vb7NimtioKY9FktGjicxqrk0xNIViPcvhgT6UWyTXDjv2/cBhaBsrncNXBH02DrcxWiI4uHA+CrUYZCPIvFLXV/xYtNyvKuN1ctluueVUvzJ7P7VsVLzTYMLzWvuOtcMbGH1ksiIC75C9MvP4kzbdl+MPcKuYDs8y9dN1HyqO5VVBc1CYRhkZ74y5iAs2zaSR3vF2VPVhav1Ba5ry0Hfho3Fu/zhrRRLp3QsFAwCjauQB6KTlX74ZHeQnPyPKUIcWPxX6gNcaNb05FNziq4+HfKBoKqbq5CICBU1Tf92Cob9yJfKefSTKBFIwz4iXKVc3nu2MHUJCfMj9dMnW8Yf7v4yP/nKLLuq0nTFblb9KYt5OWlI0DHFK/SNCe8Y88exjT4j2H+3b3BTM0Rv9RVzau5nTTsOtjHnjzLuxN+85m4a7AxbN4tVwSuWKAZkFSZOiiuji38x1nnn7Cd4rMZzhLDiyZHWvnU7bpg30emfcKSgCcRhhMJN7M13RKIBD51HmHuxrJJyqymk2pWdM6AESdOkMKK+vk3wSkBN91893rQr6XBUZfoxKMhdkcIbcAhskeJJMEOs9UlEh8kaLjhDDFJo1A==';const _IH='e82a6bee8aad02d1ab503c1462dc1edbb06cc44c13d45bc385e275a629ac54b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

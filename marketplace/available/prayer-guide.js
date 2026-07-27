// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfs5NRFFTMb6Uk5sj+STcLoCp1XMV29X9QlxAwrxUY25kewph5t5aq058EdGO/LtCeiyXjwAX4tYlhip12GB0Qzf9EPctBLufxkpDA5f1UkD7G8M5KHgsvWtOJj2fpVR5zoH06x5/6kfr4ZgQpPTAsk7lj/onl8femKqR8x1uFY/o+vsRVhE/ZhOcyae7TXmrHdKkB1CoM7jLEL9McJEhcGMpms5sDyYkx6ZVVsTSzNMZEaI8uDosm3AmR0wqKjGrl9HXXhJtBlJj9P1Olgw3KbAI+6OEk/e+Fzpn3ZTwNsBvPes0GBXu4DqNq40eyHYVfoePOjATaJE0pt6AVQJkMryWVCbiGa2T9TnbUU+GPuyFYYcYeELerXapoYlAerWd3tvfWeNomQvglxTqpFe3a8A1EnpVJCyz81yJfKR3thT7baAnXliDCWi2HoiVUqEtKAfm9ls8RvYDshZ/FNHoGSOLeTkbMjGXEDmhjG0xiUgbGUDFAaciqN1s/efzJZSJW7I8jdY3N+OoWbP3TNP8R9QcwhvaZISAX126S5C25sy5uFVsr32J7nQqpeU24+nCUpxt2yIukPyhv6PsGCE6wAgmDl2LDfr1/OEhulozF6mFwQZP/sQ5ZcRI9QJf7egfP478e77sJ5Fu5poDO6HsWZXgKbOfnFlDHshO/Byo6pXi1er1gNaMFHUO9s5hg6F6KwyYN4jWRzCFYAlRiaWhPVIKz+4z7y0q5gy+azcmQSsUCImoxie+ByLlH+c+8jvJYJmm8VNsezqbIVKGEzCKznu0W2L+aNGZVsLbNu7ucVN4/yvK+NAvaDlv3EgoG0ni9U0YghoVU2dUGU0xroRzlMPy34q5ywyBprjkkzpVG6evSaS4fiddyKjYfSibViffw7zes/7qN/eobpt5WRkeu0CWZKB7R0HvRME8MBtk6KZ4xqT61UC5o1IU6gt5hwtbAo78KyE7FOQFsRVjAahYV/txR0xEeuX/skIhFYlyb2YUHddXcPwF6xg30kGzm2bYXrI0mNEX82iD8X6sTEIqhRtKNL1t5W/BJLg3XG6TI36Oc12y9WFsr/ngMzFoVZZVDgKpq0thPOyOO+MsSoZybTF/vtIRRpd1c4Pzl9GkKItrJ0U9S3UdFI3XV/yF18EcQc79pCvz6u0XjXIQz3gG8W/fKprezZmJaor29GKGJIb0OSiPPvm7WDTjooa1mQ4NEl0mo2J+r41n0/Si+U1tZ1nWv6EuG3SB+OpmqtF4CMuGBmL//Mf982kV/lIaRIGdxzL25aSbpziDh8NMLRAKioXf3s24elHTRn3P5pPAUkR0d2dVfTmSMDEFnmC8hABjPLVXGDtwv/7YLCdGP3x3kBArh4YD/2uRF6h14kB1qR4VWpYB3p8fITC/ql5XmyZkS33AHW098yKCuV6mrnNU2GqdlkHQR09WgmsJgVO3vhpLjyuAkLmf8dh8wlYym7RX01KhgR/+vEWSFlFimK6MOnfH2i+apl5JDkR9Lp5QuXS5fq/H7tPVKPp7gT0jB+MgNAAotKHOJkFK+wLN8X9ixV7p1E2SCjo6UiNlEt7JBeDGphwabUA/5eoq2YP59eCyR3BXgDd1yB2gC1yOBSkpQWK8c/BrBQoRHBEM4wZrmf+XGTXl+F68VhA7pVLxef6kgfQrc4PqDE5CoK/lATAje3Z6jjt10xJeBRQpl7MG9Io+7GH0jA01ovQmDKpUotho0/Cod4oDp7HhisssCoCe2vaol5yPXqBtsLGJdCP834MjYDfvd5ra+HEn6KS66kXTcjbyV4NZFscmQ+k3EMbK4xAadkDOrCoK9D3nUWav6';const _IH='3e253e464be530f91440495b608b7ad0899bc163a464100d6f0c1cc028dcdd2c';let _src;

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

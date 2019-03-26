function simpleAdd(nb) {
    if (nb !== 0)
        return nb + simpleAdd(nb-1);
    else
        return nb; 
}
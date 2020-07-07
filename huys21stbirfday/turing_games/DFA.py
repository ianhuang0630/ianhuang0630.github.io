import numpy as np

class DFA (object):
    def __init__(self, states, inputs, transitions):
        """
        Inputs:
            states (list of str): Each element is a state string
            inputs (list of str): Each element is a string corresponding to stimulus
            transitions (np.array): boolean array for transitions 
        """
        self.states = states
        self.idx2states = {idx: el for idx, el in enumerate(self.states)}
        self.states2idx = {el: idx for idx, el in enumerate(self.states)}

        self.inputs = inputs
        self.idx2inputs = {idx: el for idx, el in enumerate(self.inputs)} 
        self.inputs2idx = {el: idx for idx, el in enumerate(self.inputs)}
        
        self.states = states;
        
        # transitions is N x M (out) x M (in) tensor
        assert type(transitions) is np.ndarray
        self.transitions = transitions
        
        self.current_state = np.array([1] + [0]*(len(self.states)-1))

    def run(self, x):
        if type(x) is str:
            idx = self.states2idx[x]
        elif type(x) is int:
            idx = x
        else:
            raise ValueError("incorrect type")
        
        # M x M slice for the corresponding 
        transition_slice = self.transitions[idx, :, :]
        output_state = np.dot( transition_slice,  self.current_state)
        self.current_state = output_state

        return self.current_state

if __name__=='__main__':
    
    el = np.stack( [np.eye(3,3)[:,::-1]]*5 )
    
    dfa = DFA(['happy', 'sad', 'angry'], ['bug in your code', 'mo spits out blood', 'anna ditches hangout', 'shuran compliments your results', 'you storm the agency'], el)
    import ipdb; ipdb.set_trace()
    out1 = dfa.run(0);

    pass
        
        

        


